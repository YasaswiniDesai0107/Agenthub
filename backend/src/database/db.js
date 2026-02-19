const mysql = require('mysql2/promise');

let pool;

function getPool() {
    if (!pool) {
        pool = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT) || 3306,
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'agenthub',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            timezone: '+00:00',
        });
    }
    return pool;
}

async function query(sql, params = []) {
    const pool = getPool();
    // console.log(`[DB] Executing: ${sql.substring(0, 50).replace(/\n/g, ' ')}... Params:`, params);
    try {
        const [rows] = await pool.query(sql, params);
        // console.log(`[DB] Success. Rows: ${rows ? rows.length : 0}`);
        return rows;
    } catch (err) {
        console.error(`[DB] Error executing query: ${err.message}`);
        throw err;
    }
}

async function queryOne(sql, params = []) {
    const rows = await query(sql, params);
    return rows[0] || null;
}

async function testConnection() {
    try {
        const pool = getPool();
        const conn = await pool.getConnection();
        console.log('✅ MySQL connection established');
        conn.release();
        return true;
    } catch (err) {
        console.error('❌ MySQL connection failed:', err.message);
        return false;
    }
}

module.exports = { getPool, query, queryOne, testConnection };
