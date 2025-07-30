const fs = require("fs");
const path = require("path");
const pool = require("./pool");

async function seed() {
    try {
        const schemaSql = fs.readFileSync(path.join(__dirname, "schema.sql")).toString();
        await pool.query(schemaSql);
        console.log('Create tables if they do not already exist');

        const tables = await getTableNames();

        for (const table of tables) {
            const { rows } = await pool.query(`SELECT COUNT(*) FROM ${table};`)
            const count = parseInt(rows[0].count);
            if (count === 0) {
                const insertSql = fs.readFileSync(path.join(__dirname, `data/${table.toLowerCase()}.sql`)).toString();
                await pool.query(insertSql);
                console.log(`Table ${table} seeded successfully!`);
            } else {
                console.log(`Skipped ${table} table - already has data`);
            }
        }
    } catch(error) {
        console.error("Error seeding database: ", error);
        throw error;
    }
}

async function getTableNames() {
    try {
        const result = await pool.query(`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema='public'
            AND table_type='BASE TABLE';
        `);
        
        const tableNames = result.rows.map(row => row.table_name);
        console.log('Tables: ', tableNames);
        return tableNames;
    } catch(error) {
        console.error('Error fetching table names:', error);
    }
}

module.exports = seed;