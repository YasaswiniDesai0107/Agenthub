require('dotenv').config();
const mysql = require('mysql2/promise');

async function checkManifest() {
    const conn = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'root',
        database: process.env.DB_NAME || 'agenthub',
    });

    // Get a manifest that has content
    const [rows] = await conn.query(`
        SELECT a.id, a.name, am.manifest_json, ac.markdown_content
        FROM agents a
        LEFT JOIN agent_manifest am ON am.agent_id = a.id
        LEFT JOIN agent_card ac ON ac.agent_id = a.id
        LIMIT 1
    `);

    if (rows[0]) {
        const r = rows[0];
        console.log('AGENT:', r.name);
        console.log('MANIFEST JSON (raw type):', typeof r.manifest_json);

        // MySQL2 auto-parses JSON columns — dump the full object
        const manifest = r.manifest_json;
        console.log('\nMANIFEST TOP-LEVEL KEYS:', manifest ? Object.keys(manifest) : 'NULL');

        if (manifest) {
            console.log('\nFULL MANIFEST:');
            console.log(JSON.stringify(manifest, null, 2).substring(0, 3000));
        }

        console.log('\n\nCARD CONTENT (first 500 chars):');
        console.log(r.markdown_content ? r.markdown_content.substring(0, 500) : 'NULL');
    }

    // Check how many manifests have x_agent_hub_extra
    const [allManifests] = await conn.query('SELECT manifest_json FROM agent_manifest LIMIT 5');
    console.log('\n\n=== CHECKING x_agent_hub_extra IN FIRST 5 MANIFESTS ===');
    allManifests.forEach((row, i) => {
        const mj = row.manifest_json;
        const extra = mj && mj.x_agent_hub_extra;
        console.log(`\nManifest ${i + 1} top-level keys:`, mj ? Object.keys(mj) : 'NULL');
        if (extra) {
            console.log(`  x_agent_hub_extra keys:`, Object.keys(extra));
            console.log(`  goals:`, JSON.stringify(extra.goals || []).substring(0, 100));
            console.log(`  features:`, JSON.stringify(extra.features || []).substring(0, 100));
            console.log(`  personas:`, JSON.stringify(extra.personas || []).substring(0, 100));
            console.log(`  techStack:`, JSON.stringify(extra.techStack || []).substring(0, 100));
        } else {
            console.log('  ❌ NO x_agent_hub_extra key found');
        }
    });

    await conn.end();
}

checkManifest().catch(e => console.error(e.message));
