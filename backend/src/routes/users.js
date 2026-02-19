const express = require('express');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { body, validationResult } = require('express-validator');
const { query, queryOne } = require('../database/db');
const { requireAuth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

const ok = (res, data, message = 'Success') => res.json({ success: true, message, data });
const fail = (res, status, error) => res.status(status).json({ success: false, error });

// ─── GET /api/users ──────────────────────────────────────────────────────────
// Admin only: list all users
router.get('/', requireAuth, requireAdmin, async (req, res) => {
    try {
        const users = await query(`
      SELECT u.id, u.name, u.email, u.is_active, u.last_login, u.created_at,
             r.role_name as role, r.id as role_id
      FROM users u
      LEFT JOIN roles r ON u.role_id = r.id
      ORDER BY u.created_at DESC
    `);
        return ok(res, users.map(u => ({
            ...u,
            initials: u.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
        })));
    } catch (err) {
        return fail(res, 500, 'Failed to fetch users.');
    }
});

// ─── POST /api/users ──────────────────────────────────────────────────────────
// Admin only: create user
router.post('/', requireAuth, requireAdmin, [
    body('name').trim().notEmpty().withMessage('Name required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    body('role').isIn(['admin', 'user']).withMessage('Invalid role'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return fail(res, 400, errors.array()[0].msg);

    const { name, email, password, role } = req.body;

    try {
        // Check email uniqueness
        const existing = await queryOne('SELECT id FROM users WHERE email = ?', [email]);
        if (existing) return fail(res, 409, 'Email already registered.');

        const roleRow = await queryOne('SELECT id FROM roles WHERE role_name = ?', [role]);
        if (!roleRow) return fail(res, 400, 'Invalid role.');

        const passwordHash = await bcrypt.hash(password, 12);
        const userId = uuidv4();

        await query(`
      INSERT INTO users (id, name, email, password_hash, role_id, is_active)
      VALUES (?, ?, ?, ?, ?, TRUE)
    `, [userId, name, email, passwordHash, roleRow.id]);

        // Audit log
        await query(`
      INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, entity_name, ip_address)
      VALUES (?, ?, 'USER_CREATED', 'user', ?, ?, ?)
    `, [uuidv4(), req.user.id, userId, email, req.ip]);

        return ok(res, { id: userId, name, email, role }, 'User created successfully');
    } catch (err) {
        return fail(res, 500, 'Failed to create user.');
    }
});

// ─── PATCH /api/users/:id/status ─────────────────────────────────────────────
// Admin only: activate/deactivate user
router.patch('/:id/status', requireAuth, requireAdmin, async (req, res) => {
    const { id } = req.params;
    const { isActive } = req.body;

    if (id === req.user.id) return fail(res, 400, 'Cannot modify your own account status.');

    try {
        const user = await queryOne('SELECT id, email FROM users WHERE id = ?', [id]);
        if (!user) return fail(res, 404, 'User not found.');

        await query('UPDATE users SET is_active = ? WHERE id = ?', [isActive, id]);

        await query(`
      INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, entity_name, ip_address)
      VALUES (?, ?, ?, 'user', ?, ?, ?)
    `, [uuidv4(), req.user.id, isActive ? 'USER_ACTIVATED' : 'USER_DEACTIVATED', id, user.email, req.ip]);

        return ok(res, null, `User ${isActive ? 'activated' : 'deactivated'} successfully`);
    } catch (err) {
        return fail(res, 500, 'Failed to update user status.');
    }
});

// ─── PATCH /api/users/:id/role ────────────────────────────────────────────────
// Admin only: change user role
router.patch('/:id/role', requireAuth, requireAdmin, [
    body('role').isIn(['admin', 'user']),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return fail(res, 400, errors.array()[0].msg);

    const { id } = req.params;
    const { role } = req.body;

    if (id === req.user.id) return fail(res, 400, 'Cannot change your own role.');

    try {
        const roleRow = await queryOne('SELECT id FROM roles WHERE role_name = ?', [role]);
        if (!roleRow) return fail(res, 400, 'Invalid role.');

        await query('UPDATE users SET role_id = ? WHERE id = ?', [roleRow.id, id]);

        await query(`
      INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, metadata, ip_address)
      VALUES (?, ?, 'USER_ROLE_CHANGED', 'user', ?, ?, ?)
    `, [uuidv4(), req.user.id, id, JSON.stringify({ newRole: role }), req.ip]);

        return ok(res, null, 'User role updated successfully');
    } catch (err) {
        return fail(res, 500, 'Failed to update role.');
    }
});

module.exports = router;
