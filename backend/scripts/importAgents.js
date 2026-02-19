const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { query, queryOne } = require('../src/database/db');

const EXCEL_FILE = path.resolve(__dirname, '../../agent-hub/AgentHub_Agent_Catalogue.xlsx');

// Helper to parse lists (newline, semicolon, or comma separated)
const parseList = (str) => {
    if (!str) return [];
    return str.toString().split(/[\n;,]/).map(s => s.trim()).filter(s => s.length > 0);
};

// Fix Windows-1252 bullet (U+2022 •) which appears as U+0393 U+00C7 U+00F3 in JS string
const sanitize = (str) => {
    if (!str) return str;
    return str
        .replace(/\u0393\u00C7\u00F3/g, '\u2022')
        .replace(/\u0393\u00C7\u00F4/g, '\u201c')
        .replace(/\u0393\u00C7\u00F9/g, '\u2019')
        .replace(/\u0393\u00C7\u00F6/g, '\u2013')
        .replace(/\u0393\u00C7\u00FB/g, '\u2022')
        .trim();
};

// Sanitized list parser
const parseListSanitized = (str) => parseList(sanitize(str));

async function importAgents() {
    try {
        console.log('Starting Excel Import...');

        // 1. Read Excel
        if (!fs.existsSync(EXCEL_FILE)) {
            throw new Error(`Excel file not found at: ${EXCEL_FILE}`);
        }
        const workbook = XLSX.readFile(EXCEL_FILE);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rawData = XLSX.utils.sheet_to_json(sheet, { defval: '' }); // Array of objects, empty string for missing cells

        console.log(`Found ${rawData.length} agents in Excel.`);

        // 2. Clear Database
        console.log('Clearing old data...');
        await query('DELETE FROM agent_card');
        await query('DELETE FROM agent_manifest');
        await query('DELETE FROM agents');
        // We assume users table is fine (admin exists)

        // 3. Get/Create Owner (Admin)
        let owner = await queryOne("SELECT id FROM users WHERE email = 'admin@agenthub.com'");
        if (!owner) {
            // Should exist from init_db/fix_admin, but retry if needed
            console.log('Admin user not found, using placeholder logic? (Should not happen if init DB ran)');
            // Fallback: create placeholder
            const ownerId = uuidv4();
            await query("INSERT INTO users (id, name, email, password_hash, role_id) VALUES (?, 'System Admin', 'admin@agenthub.com', 'placeholder', 'admin-role-id')", [ownerId]);
            owner = { id: ownerId };
        }

        // 4. Iterate and Insert
        for (const row of rawData) {
            const agentId = uuidv4();

            // Map Columns
            const name = sanitize(row['Agent Name'] || 'Unnamed Agent');
            const domain = sanitize(row['Category'] || 'General');
            const description = sanitize(row['Description'] || '');
            const version = '1.0.0'; // Default
            const status = 'UPCOMING'; // Match ENUM case

            // Generate short description (first sentence or truncated)
            let shortDescription = description.split('.')[0];
            if (shortDescription.length > 200) shortDescription = shortDescription.substring(0, 197) + '...';

            // Extract arrays for Manifest/Card
            const goals = parseListSanitized(row['Goals']);
            const inScope = parseListSanitized(row['In scope']);
            const outOfScope = parseListSanitized(row['Out of scope']);
            const tools = parseListSanitized(row['Tools']).map(t => ({ name: t, description: '' }));
            const kpis = parseListSanitized(row['KPIs']).map(k => ({ name: k, target: 'TBD' }));
            const features = parseList(row['Features']); // semicolon-separated tags, no bullet cleanup needed
            const guardrails = parseListSanitized(row['Guardrails']);
            const triggers = parseListSanitized(row['Triggers']);
            const examples = parseListSanitized(row['Examples']);
            const dod = parseListSanitized(row['DoD (Definition of Done)']);
            const dependencies = parseListSanitized(row['Dependencies']);
            const implNotes = sanitize(row['Impl notes'] || '');
            const workflow = sanitize(row['Workflow'] || '');
            const excelAgentId = row['Agent ID'] || ''; // Preserve A-001 style ID

            // Combine for Operational Details
            const operationalDetailsStr = `
Workflow:
${workflow}

Definition of Done:
${dod.join(', ')}

Dependencies:
${dependencies.join(', ')}

Implementation Notes:
${implNotes}
            `.trim();

            // Insert Agent Core
            await query(`
                INSERT INTO agents (id, name, description, short_description, domain, version, status, owner_id)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `, [agentId, name, description, shortDescription, domain, version, status, owner.id]);

            // Generate Manifest JSON with extra fields
            const parseListProp = (key) => parseList(row[key]);

            const manifestData = {
                name,
                description,
                domain,
                status,
                version,
                x_agent_hub_extra: {
                    agentId: excelAgentId,  // A-001 style for display
                    problemStatement: description,
                    inScope,
                    outOfScope,
                    goals,
                    features,
                    tools,
                    kpis,
                    inputs: parseListProp('Inputs'),
                    outputs: parseListProp('Outputs'),
                    securityControls: parseListProp('Security'),
                    guardrails,
                    triggers,
                    examples,
                    operationalDetails: operationalDetailsStr,
                    personas: []  // Not present in Excel — left empty
                }
            };

            await query(`
                INSERT INTO agent_manifest (id, agent_id, manifest_json)
                VALUES (?, ?, ?)
            `, [uuidv4(), agentId, JSON.stringify(manifestData)]);

            // Generate Card Markdown
            const cardContent = `
# ${name}

**ID:** ${excelAgentId} | **Domain:** ${domain} | **Version:** ${version} | **Status:** ${status}

---

### **Overview**
${description}

### **Goals & Objectives**
${goals.map(g => `- ${g}`).join('\n') || 'No goals specified.'}

### **Key Features**
${features.map(f => `- ${f}`).join('\n') || 'No features listed.'}

### **Workflow & Implementation**
${operationalDetailsStr}

### **In Scope**
${inScope.map(i => `- ${i}`).join('\n') || 'None'}

### **Out of Scope**
${outOfScope.map(i => `- ${i}`).join('\n') || 'None'}

### **Inputs**
${parseListProp('Inputs').map(i => `- ${i}`).join('\n') || 'None'}

### **Outputs**
${parseListProp('Outputs').map(o => `- ${o}`).join('\n') || 'None'}

### **Tools**
${tools.map(t => `- ${t.name}`).join('\n') || 'None'}

### **KPIs**
${kpis.map(k => `- ${k.name}`).join('\n') || 'None'}

### **Triggers**
${triggers.map(t => `- ${t}`).join('\n') || 'None'}

### **Guardrails**
${guardrails.map(g => `- ${g}`).join('\n') || 'Standard protocols apply.'}

### **Security Controls**
${parseListProp('Security').map(s => `- ${s}`).join('\n') || 'Standard protocols apply.'}

### **Examples**
${examples.map(e => `- ${e}`).join('\n') || 'None'}
            `;

            await query(`
                INSERT INTO agent_card (id, agent_id, markdown_content)
                VALUES (?, ?, ?)
            `, [uuidv4(), agentId, cardContent]);
        }

        console.log(`Successfully imported ${rawData.length} agents.`);
        process.exit(0);

    } catch (err) {
        console.error('Import Error:', err);
        process.exit(1);
    }
}

importAgents();
