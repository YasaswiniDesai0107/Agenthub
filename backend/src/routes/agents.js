const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { body, query: queryParam, validationResult } = require('express-validator');
const { getPool, query, queryOne } = require('../database/db');
const { requireAuth, requirePermission, requireAdmin, verifyAccessToken } = require('../middleware/auth');

// Optional auth: attaches user if token present, but doesn't block if missing/invalid
function optionalAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        try {
            req.user = verifyAccessToken(authHeader.split(' ')[1]);
        } catch (e) {
            // Token invalid/expired — treat as unauthenticated, don't block
        }
    }
    next();
}

const router = express.Router();

const ok = (res, data, message = 'Success') => res.json({ success: true, message, data });
const fail = (res, status, error) => res.status(status).json({ success: false, error });

// ─── GET /api/agents (list) ──────────────────────────────────────────────────
router.get('/', async (req, res) => {
    console.log("Route hit: /api/agents");
    try {
        const pool = getPool();
        // Join with manifest to get the A-001 display ID stored in manifest JSON
        const [rows] = await pool.query(`
            SELECT 
                a.*,
                JSON_UNQUOTE(JSON_EXTRACT(am.manifest_json, '$.x_agent_hub_extra.agentId')) as display_id
            FROM agents a
            LEFT JOIN agent_manifest am ON am.agent_id = a.id
            WHERE a.is_archived = FALSE OR a.is_archived IS NULL
            ORDER BY display_id ASC
        `);
        res.json(rows);
    } catch (error) {
        console.error("Query error:", error);
        res.status(500).json({ error: "Database error" });
    }
});

// ─── GET /api/agents/:id ──────────────────────────────────────────────────────
// Public read — no auth required to view agent details
router.get('/:id', optionalAuth, async (req, res) => {
    try {
        const agent = await queryOne(`
            SELECT a.*, u.name as owner_name, r.role_name as owner_role,
                   JSON_UNQUOTE(JSON_EXTRACT(am.manifest_json, '$.x_agent_hub_extra.agentId')) as display_id
            FROM agents a
            LEFT JOIN users u ON a.owner_id = u.id
            LEFT JOIN roles r ON u.role_id = r.id
            LEFT JOIN agent_manifest am ON am.agent_id = a.id
            WHERE a.id = ? AND (a.is_archived = FALSE OR a.is_archived IS NULL)
        `, [req.params.id]);

        if (!agent) return fail(res, 404, 'Agent not found.');

        // Increment view count
        await query('UPDATE agents SET view_count = view_count + 1 WHERE id = ?', [req.params.id]);

        // Get manifest and card
        const manifest = await queryOne('SELECT * FROM agent_manifest WHERE agent_id = ?', [req.params.id]);
        const card = await queryOne('SELECT * FROM agent_card WHERE agent_id = ?', [req.params.id]);

        // MySQL2 auto-parses JSON columns into objects — serialize back to string for frontend
        // Also flatten x_agent_hub_extra fields directly onto the response for easy access
        let extra = {};
        let manifestJsonString = '';
        if (manifest && manifest.manifest_json) {
            const mj = typeof manifest.manifest_json === 'string'
                ? JSON.parse(manifest.manifest_json)
                : manifest.manifest_json;
            extra = mj.x_agent_hub_extra || {};
            manifestJsonString = JSON.stringify(mj, null, 2);
        }

        return ok(res, {
            ...agent,
            // Flattened extra fields — frontend reads these directly
            goals: extra.goals || [],
            features: extra.features || [],
            kpis: extra.kpis || [],
            tools: extra.tools || [],
            inputs: extra.inputs || [],
            outputs: extra.outputs || [],
            inScope: extra.inScope || [],
            outOfScope: extra.outOfScope || [],
            securityControls: extra.securityControls || [],
            guardrails: extra.guardrails || [],
            triggers: extra.triggers || [],
            examples: extra.examples || [],
            personas: extra.personas || [],
            operationalDetails: extra.operationalDetails || '',
            problemStatement: extra.problemStatement || agent.description || '',
            // Manifest as string for the modal
            manifest: manifest ? { ...manifest, manifest_json: manifestJsonString } : null,
            card: card || null,
        });
    } catch (err) {
        return fail(res, 500, 'Failed to fetch agent.');
    }
});

// ─── POST /api/agents ─────────────────────────────────────────────────────────
router.post('/', requireAuth, requirePermission('create_agent'), [
    body('name').trim().notEmpty().withMessage('Agent name required'),
    body('description').optional().trim(),
    body('domain').notEmpty().withMessage('Domain required'),
    body('status').optional().isIn(['UPCOMING', 'WORK_IN_PROGRESS', 'DEPLOYED']),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return fail(res, 400, errors.array()[0].msg);

    const { name, description, short_description, domain, version = '1.0.0', status = 'UPCOMING' } = req.body;

    try {
        const agentId = uuidv4();
        await query(`
      INSERT INTO agents (id, name, description, short_description, domain, version, status, owner_id, created_by, updated_by)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [agentId, name, description, short_description, domain, version, status, req.user.id, req.user.id, req.user.id]);

        await query(`
      INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, entity_name, ip_address)
      VALUES (?, ?, 'AGENT_CREATED', 'agent', ?, ?, ?)
    `, [uuidv4(), req.user.id, agentId, name, req.ip]);

        return ok(res, { id: agentId }, 'Agent created successfully');
    } catch (err) {
        return fail(res, 500, 'Failed to create agent.');
    }
});

// ─── PUT /api/agents/:id ──────────────────────────────────────────────────────
router.put('/:id', requireAuth, requirePermission('edit_agent'), [
    body('name').optional().trim().notEmpty(),
    body('status').optional().isIn(['UPCOMING', 'WORK_IN_PROGRESS', 'DEPLOYED']),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return fail(res, 400, errors.array()[0].msg);

    const { id } = req.params;
    const { name, description, short_description, domain, version, status, cardContent, manifestContent } = req.body;

    try {
        const agent = await queryOne('SELECT id, name, status FROM agents WHERE id = ? AND is_archived = FALSE', [id]);
        if (!agent) return fail(res, 404, 'Agent not found.');

        // Update core agent details
        await query(`
      UPDATE agents SET
        name = COALESCE(?, name),
        description = COALESCE(?, description),
        short_description = COALESCE(?, short_description),
        domain = COALESCE(?, domain),
        version = COALESCE(?, version),
        status = COALESCE(?, status),
        updated_by = ?
      WHERE id = ?
    `, [name, description, short_description, domain, version, status, req.user.id, id]);

        // Update Agent Card (Markdown)
        if (cardContent !== undefined) {
            const card = await queryOne('SELECT id FROM agent_card WHERE agent_id = ?', [id]);
            if (card) {
                await query('UPDATE agent_card SET markdown_content = ?, updated_at = NOW() WHERE agent_id = ?', [cardContent, id]);
            } else {
                await query('INSERT INTO agent_card (id, agent_id, markdown_content) VALUES (?, ?, ?)', [uuidv4(), id, cardContent]);
            }
        }

        // Update Agent Manifest (JSON)
        if (manifestContent !== undefined) {
            // Ensure it is valid JSON string
            const jsonStr = typeof manifestContent === 'string' ? manifestContent : JSON.stringify(manifestContent);

            const manifest = await queryOne('SELECT id FROM agent_manifest WHERE agent_id = ?', [id]);
            if (manifest) {
                await query('UPDATE agent_manifest SET manifest_json = ?, updated_at = NOW() WHERE agent_id = ?', [jsonStr, id]);
            } else {
                await query('INSERT INTO agent_manifest (id, agent_id, manifest_json) VALUES (?, ?, ?)', [uuidv4(), id, jsonStr]);
            }
        }

        const action = status && status !== agent.status ? 'STATUS_CHANGED' : 'AGENT_EDITED';
        await query(`
      INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, entity_name, metadata, ip_address)
      VALUES (?, ?, ?, 'agent', ?, ?, ?, ?)
    `, [uuidv4(), req.user.id, action, id, agent.name, JSON.stringify({ status, previousStatus: agent.status, hasCardUpdate: !!cardContent, hasManifestUpdate: !!manifestContent }), req.ip]);

        return ok(res, null, 'Agent updated successfully');
    } catch (err) {
        console.error(err);
        return fail(res, 500, 'Failed to update agent.');
    }
});

// ─── DELETE /api/agents/:id ───────────────────────────────────────────────────
router.delete('/:id', requireAuth, requirePermission('delete_agent'), async (req, res) => {
    const { id } = req.params;

    try {
        const agent = await queryOne('SELECT id, name FROM agents WHERE id = ?', [id]);
        if (!agent) return fail(res, 404, 'Agent not found.');

        // Soft delete (archive)
        await query('UPDATE agents SET is_archived = TRUE, updated_by = ? WHERE id = ?', [req.user.id, id]);

        await query(`
      INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, entity_name, ip_address)
      VALUES (?, ?, 'AGENT_DELETED', 'agent', ?, ?, ?)
    `, [uuidv4(), req.user.id, id, agent.name, req.ip]);

        return ok(res, null, 'Agent archived successfully');
    } catch (err) {
        return fail(res, 500, 'Failed to delete agent.');
    }
});

// ─── POST /api/agents/:id/approve ─────────────────────────────────────────────
router.post('/:id/approve', requireAuth, requirePermission('approve_deployment'), async (req, res) => {
    const { id } = req.params;

    try {
        const agent = await queryOne('SELECT id, name FROM agents WHERE id = ?', [id]);
        if (!agent) return fail(res, 404, 'Agent not found.');

        await query('UPDATE agents SET status = ?, updated_by = ? WHERE id = ?', ['DEPLOYED', req.user.id, id]);

        await query(`
      INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, entity_name, ip_address)
      VALUES (?, ?, 'AGENT_APPROVED', 'agent', ?, ?, ?)
    `, [uuidv4(), req.user.id, id, agent.name, req.ip]);

        return ok(res, null, 'Agent approved and deployed');
    } catch (err) {
        return fail(res, 500, 'Failed to approve agent.');
    }
});


// ─── GET /api/agents/:id/card ─────────────────────────────────────────────────
router.get('/:id/card', requireAuth, requirePermission('view_agents'), async (req, res) => {
    try {
        const card = await queryOne('SELECT markdown_content FROM agent_card WHERE agent_id = ?', [req.params.id]);
        if (!card) return fail(res, 404, 'Card not found.');
        return ok(res, { content: card.markdown_content });
    } catch (err) {
        return fail(res, 500, 'Failed to fetch card.');
    }
});

// ─── PUT /api/agents/:id/card ─────────────────────────────────────────────────
router.put('/:id/card', requireAuth, requirePermission('edit_agent_card'), [
    body('content').notEmpty().withMessage('Content required')
], async (req, res) => {
    if (!validationResult(req).isEmpty()) return fail(res, 400, 'Content required.');

    const { id } = req.params;
    const { content } = req.body;

    try {
        const existing = await queryOne('SELECT id FROM agent_card WHERE agent_id = ?', [id]);
        if (existing) {
            await query('UPDATE agent_card SET markdown_content = ?, updated_at = NOW() WHERE agent_id = ?', [content, id]);
        } else {
            const cardId = uuidv4();
            await query('INSERT INTO agent_card (id, agent_id, markdown_content) VALUES (?, ?, ?)', [cardId, id, content]);
        }

        await query(`
            INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, entity_name, ip_address) 
            VALUES (?, ?, 'CARD_UPDATED', 'agent', ?, 'Agent Card', ?)
        `, [uuidv4(), req.user.id, id, req.ip]);

        return ok(res, null, 'Card updated successfully');
    } catch (err) {
        console.error(err);
        return fail(res, 500, 'Failed to update card.');
    }
});

// ─── GET /api/agents/:id/manifest ─────────────────────────────────────────────
router.get('/:id/manifest', requireAuth, requirePermission('view_agents'), async (req, res) => {
    try {
        const manifest = await queryOne('SELECT manifest_json FROM agent_manifest WHERE agent_id = ?', [req.params.id]);
        if (!manifest) return fail(res, 404, 'Manifest not found.');

        let content;
        try {
            content = JSON.parse(manifest.manifest_json);
        } catch (e) {
            content = manifest.manifest_json;
        }

        return ok(res, { content });
    } catch (err) {
        return fail(res, 500, 'Failed to fetch manifest.');
    }
});

// ─── PUT /api/agents/:id/manifest ─────────────────────────────────────────────
router.put('/:id/manifest', requireAuth, requirePermission('edit_manifest'), [
    body('content').notEmpty().withMessage('Content required')
], async (req, res) => {
    if (!validationResult(req).isEmpty()) return fail(res, 400, 'Content required.');

    const { id } = req.params;
    const { content } = req.body;
    const jsonStr = typeof content === 'string' ? content : JSON.stringify(content);

    try {
        try {
            JSON.parse(jsonStr);
        } catch (e) {
            return fail(res, 400, 'Invalid JSON format.');
        }

        const existing = await queryOne('SELECT id FROM agent_manifest WHERE agent_id = ?', [id]);
        if (existing) {
            await query('UPDATE agent_manifest SET manifest_json = ?, updated_at = NOW() WHERE agent_id = ?', [jsonStr, id]);
        } else {
            const manifestId = uuidv4();
            await query('INSERT INTO agent_manifest (id, agent_id, manifest_json) VALUES (?, ?, ?)', [manifestId, id, jsonStr]);
        }

        await query(`
            INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, entity_name, ip_address) 
            VALUES (?, ?, 'MANIFEST_UPDATED', 'agent', ?, 'Agent Manifest', ?)
        `, [uuidv4(), req.user.id, id, req.ip]);

        return ok(res, null, 'Manifest updated successfully');
    } catch (err) {
        console.error(err);
        return fail(res, 500, 'Failed to update manifest.');
    }
});

module.exports = router;
