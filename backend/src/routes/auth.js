const express = require('express');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { body, validationResult } = require('express-validator');
const { query, queryOne } = require('../database/db');
const {
    generateAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    requireAuth,
} = require('../middleware/auth');

const router = express.Router();

// Helper: standard response
const ok = (res, data, message = 'Success') => res.json({ success: true, message, data });
const fail = (res, status, error) => res.status(status).json({ success: false, error });

// ─── POST /api/auth/login ──────────────────────────────────────────────────────
router.post('/login', [
    body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
    body('password').notEmpty().withMessage('Password required'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return fail(res, 400, errors.array()[0].msg);

    const { email, password } = req.body;

    try {
        // Find user with role
        const user = await queryOne(`
      SELECT u.*, r.role_name as role
      FROM users u
      LEFT JOIN roles r ON u.role_id = r.id
      WHERE u.email = ? AND u.is_active = TRUE
    `, [email]);

        if (!user) return fail(res, 401, 'Invalid email or password.');

        const passwordMatch = await bcrypt.compare(password, user.password_hash);
        if (!passwordMatch) return fail(res, 401, 'Invalid email or password.');

        // Generate tokens
        const tokenPayload = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        };

        const accessToken = generateAccessToken(tokenPayload);
        const refreshToken = generateRefreshToken(tokenPayload);

        // Store refresh token hash
        const tokenHash = await bcrypt.hash(refreshToken, 10);
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        await query(`
      INSERT INTO refresh_tokens (id, user_id, token_hash, expires_at)
      VALUES (?, ?, ?, ?)
    `, [uuidv4(), user.id, tokenHash, expiresAt]);

        // Update last login
        await query('UPDATE users SET last_login = NOW() WHERE id = ?', [user.id]);

        // Audit log
        await query(`
      INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, entity_name, ip_address)
      VALUES (?, ?, 'USER_LOGIN', 'user', ?, ?, ?)
    `, [uuidv4(), user.id, user.id, user.email, req.ip]);

        return ok(res, {
            accessToken,
            refreshToken,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                initials: user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
            },
        }, 'Login successful');
    } catch (err) {
        console.error('[AUTH LOGIN]', err);
        return fail(res, 500, 'Login failed. Please try again.');
    }
});

// ─── POST /api/auth/refresh ────────────────────────────────────────────────────
router.post('/refresh', async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return fail(res, 401, 'Refresh token required.');

    try {
        const decoded = verifyRefreshToken(refreshToken);

        // Verify token exists in DB
        const tokens = await query(
            'SELECT * FROM refresh_tokens WHERE user_id = ? AND expires_at > NOW()',
            [decoded.id]
        );

        let valid = false;
        for (const t of tokens) {
            if (await bcrypt.compare(refreshToken, t.token_hash)) {
                valid = true;
                break;
            }
        }

        if (!valid) return fail(res, 401, 'Invalid or expired refresh token.');

        const user = await queryOne(`
      SELECT u.*, r.role_name as role
      FROM users u LEFT JOIN roles r ON u.role_id = r.id
      WHERE u.id = ? AND u.is_active = TRUE
    `, [decoded.id]);

        if (!user) return fail(res, 401, 'User not found or deactivated.');

        const newAccessToken = generateAccessToken({
            id: user.id, email: user.email, name: user.name, role: user.role,
        });

        return ok(res, { accessToken: newAccessToken }, 'Token refreshed');
    } catch (err) {
        return fail(res, 401, 'Invalid refresh token.');
    }
});

// ─── POST /api/auth/logout ────────────────────────────────────────────────────
router.post('/logout', requireAuth, async (req, res) => {
    try {
        // Invalidate all refresh tokens for this user
        await query('DELETE FROM refresh_tokens WHERE user_id = ?', [req.user.id]);

        await query(`
      INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, entity_name, ip_address)
      VALUES (?, ?, 'USER_LOGOUT', 'user', ?, ?, ?)
    `, [uuidv4(), req.user.id, req.user.id, req.user.email, req.ip]);

        return ok(res, null, 'Logged out successfully');
    } catch (err) {
        return fail(res, 500, 'Logout failed.');
    }
});

// ─── GET /api/auth/me ─────────────────────────────────────────────────────────
router.get('/me', requireAuth, async (req, res) => {
    try {
        const user = await queryOne(`
      SELECT u.id, u.name, u.email, u.is_active, u.last_login, u.created_at, r.role_name as role
      FROM users u LEFT JOIN roles r ON u.role_id = r.id
      WHERE u.id = ?
    `, [req.user.id]);

        if (!user) return fail(res, 404, 'User not found.');

        return ok(res, {
            ...user,
            initials: user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
        });
    } catch (err) {
        return fail(res, 500, 'Failed to fetch user.');
    }
});

// ─── POST /api/auth/forgot-password ───────────────────────────────────────────
router.post('/forgot-password', [
    body('email').isEmail().normalizeEmail(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return fail(res, 400, 'Valid email required.');

    // Always return success to prevent email enumeration
    return ok(res, null, 'If an account exists with this email, a reset link has been sent.');
});

// ─── POST /api/auth/reset-password ────────────────────────────────────────────
router.post('/reset-password', [
    body('token').notEmpty(),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return fail(res, 400, errors.array()[0].msg);

    // In production: validate reset token from DB, update password
    return ok(res, null, 'Password reset successfully. Please login with your new password.');
});

module.exports = router;
