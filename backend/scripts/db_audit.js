require('dotenv').config();
const mysql = require('mysql2/promise');

async function audit() {
    const conn = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'root',
        database: process.env.DB_NAME || 'agenthub',
    });

    const result = {};

    // A. Row count
    const [[{ total }]] = await conn.query('SELECT COUNT(*) as total FROM agents');
    result.rowCount = total;

    // B. Tables
    const [tables] = await conn.query('SHOW TABLES');
    result.tables = tables.map(t => Object.values(t)[0]);

    // C. Schema
    const [cols] = await conn.query('DESCRIBE agents');
    result.agentsSchema = cols.map(c => ({ field: c.Field, type: c.Type, null: c.Null, default: c.Default }));

    // D. Sample row
    const [[sample]] = await conn.query('SELECT * FROM agents LIMIT 1');
    result.sampleRow = {};
    Object.entries(sample).forEach(([k, v]) => {
        result.sampleRow[k] = v === null ? null : String(v).substring(0, 150);
    });

    // E. Manifest
    try {
        const [mCols] = await conn.query('DESCRIBE agent_manifest');
        result.manifestSchema = mCols.map(c => ({ field: c.Field, type: c.Type }));
        const [[mCount]] = await conn.query('SELECT COUNT(*) as c FROM agent_manifest');
        result.manifestCount = mCount.c;
        const [[mSample]] = await conn.query('SELECT * FROM agent_manifest LIMIT 1');
        if (mSample) {
            result.manifestSample = {};
            Object.entries(mSample).forEach(([k, v]) => {
                result.manifestSample[k] = v === null ? null : String(v).substring(0, 300);
            });
        }
    } catch (e) { result.manifestError = e.message; }

    // F. Card
    try {
        const [cCols] = await conn.query('DESCRIBE agent_card');
        result.cardSchema = cCols.map(c => ({ field: c.Field, type: c.Type }));
        const [[cCount]] = await conn.query('SELECT COUNT(*) as c FROM agent_card');
        result.cardCount = cCount.c;
        const [[cSample]] = await conn.query('SELECT * FROM agent_card LIMIT 1');
        if (cSample) {
            result.cardSample = {};
            Object.entries(cSample).forEach(([k, v]) => {
                result.cardSample[k] = v === null ? null : String(v).substring(0, 300);
            });
        }
    } catch (e) { result.cardError = e.message; }

    // G. Null checks on existing columns
    const [nc] = await conn.query(`
        SELECT 
            SUM(short_description IS NULL OR short_description = '') as null_short_desc,
            SUM(description IS NULL OR description = '') as null_desc,
            SUM(domain IS NULL OR domain = '') as null_domain,
            SUM(status IS NULL OR status = '') as null_status,
            SUM(version IS NULL OR version = '') as null_version
        FROM agents
    `);
    result.nullChecks = nc[0];

    // H. 5 sample agents
    const [samples] = await conn.query('SELECT id, name, domain, status, version, short_description FROM agents LIMIT 5');
    result.fiveSamples = samples;

    await conn.end();
    console.log(JSON.stringify(result, null, 2));
}

audit().catch(err => { console.error(JSON.stringify({ error: err.message })); process.exit(1); });
