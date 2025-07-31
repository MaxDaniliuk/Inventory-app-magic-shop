const fs = require("fs");
const path = require("path");
const pool = require("./pool");
const getTableNames = require("./getTableNames");

async function seed() {
    try {
        const schemaSql = fs.readFileSync(path.join(__dirname, "schema.sql")).toString();
        await pool.query(schemaSql);
        console.log('Create tables if they do not already exist');

        const tables = await getTableNames();
        console.log('Tables: ', tables);

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

module.exports = seed;