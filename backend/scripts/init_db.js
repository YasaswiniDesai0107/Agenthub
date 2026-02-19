const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function init() {
    console.log('Initializing database...');

    // Connect without DB selected
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });

    try {
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
        console.log(`Database '${process.env.DB_NAME}' created or verified.`);
        await connection.end();

        // Reconnect with DB and multiple statements
        const db = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            multipleStatements: true
        });

        const schemaPath = path.join(__dirname, '../src/database/schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');

        await db.query(schema);
        console.log('Schema executed successfully.');
        await db.end();

    } catch (err) {
        console.error('Error initializing DB:', err);
        process.exit(1);
    }
}

init();
