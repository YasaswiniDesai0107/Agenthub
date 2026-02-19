const express = require('express');
const { query } = require('../database/db');
const { requireAuth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

const ok = (res, data, message = 'Success') => res.json({ success: true, message, data });
const fail = (res, status, error) => res.status(status).json({ success: false, error });

// ─── GET /api/audit ───────────────────────────────────────────────────────────
// Admin only: get audit logs
router.get('/', requireAuth, requireAdmin, async (req, res) => {
    const { entityType, action, userId, page = 1, limit = 50 } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);

    try {
        let sql = `
      SELECT al.*, u.name as user_name, u.email as user_email
      FROM audit_logs al
      LEFT JOIN users u ON al.user_id = u.id
      WHERE 1=1
    `;
        const params = [];

        if (entityType) { sql += ' AND al.entity_type = ?'; params.push(entityType); }
        if (action) { sql += ' AND al.action = ?'; params.push(action); }
        if (userId) { sql += ' AND al.user_id = ?'; params.push(userId); }

        sql += ' ORDER BY al.timestamp DESC LIMIT ? OFFSET ?';
        params.push(parseInt(limit), offset);

        const logs = await query(sql, params);
        return ok(res, logs);
    } catch (err) {
        return fail(res, 500, 'Failed to fetch audit logs.');
    }
});

module.exports = router;
