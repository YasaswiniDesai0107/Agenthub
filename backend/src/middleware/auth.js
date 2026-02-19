const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'agenthub_access_secret';
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'agenthub_refresh_secret';
const ACCESS_EXPIRES = process.env.JWT_ACCESS_EXPIRES || '15m';
const REFRESH_EXPIRES = process.env.JWT_REFRESH_EXPIRES || '7d';

function generateAccessToken(payload) {
    return jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_EXPIRES });
}

function generateRefreshToken(payload) {
    return jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES });
}

function verifyAccessToken(token) {
    return jwt.verify(token, ACCESS_SECRET);
}

function verifyRefreshToken(token) {
    return jwt.verify(token, REFRESH_SECRET);
}

/**
 * Middleware: Require valid JWT access token
 */
function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'Authentication required. Please provide a valid token.' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = verifyAccessToken(token);
        req.user = decoded;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, error: 'Token expired. Please refresh your session.' });
        }
        return res.status(401).json({ success: false, error: 'Invalid token.' });
    }
}

/**
 * Middleware: Require specific roles
 */
function requireRole(...roles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ success: false, error: 'Authentication required.' });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                error: `Access denied. Required role: ${roles.join(' or ')}. Your role: ${req.user.role}`,
            });
        }
        next();
    };
}

/**
 * Middleware: Require admin
 */
function requireAdmin(req, res, next) {
    return requireRole('admin')(req, res, next);
}

/**
 * Check if user has a specific permission
 */
const PERMISSIONS = {
    admin: [
        'manage_users', 'create_agent', 'edit_agent', 'delete_agent', 'approve_deployment', 'view_agents',
        'edit_agent_card', 'edit_manifest', 'change_status', 'archive_agent', 'view_audit_logs'
    ],
    user: ['view_agents'],
};

function hasPermission(role, permission) {
    return PERMISSIONS[role]?.includes(permission) ?? false;
}

function requirePermission(permission) {
    return (req, res, next) => {
        if (!req.user || !hasPermission(req.user.role, permission)) {
            return res.status(403).json({
                success: false,
                error: `Permission denied. Required permission: ${permission}`,
            });
        }
        next();
    };
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken,
    requireAuth,
    requireRole,
    requireAdmin,
    hasPermission,
    requirePermission,
};
