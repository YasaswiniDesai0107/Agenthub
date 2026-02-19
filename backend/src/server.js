require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const agentRoutes = require('./routes/agents');
const auditRoutes = require('./routes/audit');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Security Middleware ───────────────────────────────────────────────────────
app.use(helmet());

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
    max: parseInt(process.env.RATE_LIMIT_MAX) || 100,
    message: { success: false, error: 'Too many requests. Please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

// Stricter rate limit for auth endpoints
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { success: false, error: 'Too many authentication attempts. Please try again in 15 minutes.' },
});

// ─── Body Parsing ─────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ─── Request Logging (dev) ────────────────────────────────────────────────────
if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
        next();
    });
}

// ─── Health / Ping Check ──────────────────────────────────────────────────────
app.get('/ping', (req, res) => {
    console.log('PING HIT');
    res.json({ message: 'pong' });
});

app.get('/health', (req, res) => {
    res.json({
        success: true,
        service: 'AgentHub API',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        status: 'healthy',
    });
});

// ─── API Routes ───────────────────────────────────────────────────────────────
app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/audit', auditRoutes);

// ─── 404 Handler ──────────────────────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({ success: false, error: `Route ${req.method} ${req.path} not found` });
});

// ─── Global Error Handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
    console.error('[ERROR]', err);
    res.status(err.status || 500).json({
        success: false,
        error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
    });
});

// ─── Start Server FIRST, then test DB ────────────────────────────────────────
// CRITICAL FIX: app.listen is called immediately with explicit '0.0.0.0' binding.
// DB connection is tested AFTER the server is already accepting requests.
// This prevents any blocking async operation from preventing the server from starting.
app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🚀 AgentHub API running on port ${PORT}`);
    console.log(`📍 Ping:   http://localhost:${PORT}/ping`);
    console.log(`📍 Health: http://localhost:${PORT}/health`);
    console.log(`🔐 Auth:   http://localhost:${PORT}/api/auth`);
    console.log(`👥 Users:  http://localhost:${PORT}/api/users`);
    console.log(`🤖 Agents: http://localhost:${PORT}/api/agents`);
    console.log(`📋 Audit:  http://localhost:${PORT}/api/audit`);

    // Test DB connection AFTER server is up — non-blocking
    const { testConnection } = require('./database/db');
    testConnection()
        .then(connected => {
            if (connected) {
                console.log('✅ Database Connected Successfully!\n');
            } else {
                console.warn('⚠️  WARNING: Database connection failed. API routes that require DB will error.');
                console.warn('   Check DB_HOST, DB_USER, DB_PASSWORD, DB_NAME in .env\n');
            }
        })
        .catch(err => {
            console.error('❌ DB connection test threw an error:', err.message);
        });
});

module.exports = app;
