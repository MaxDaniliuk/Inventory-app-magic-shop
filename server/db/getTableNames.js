const pool = require("./pool");


async function getTableNames() {
    try {
        const result = await pool.query(`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema='public'
            AND table_type='BASE TABLE';
        `);
        
        const tableNames = result.rows.map(row => row.table_name);
        return tableNames;
    } catch(error) {
        throw new Error('Error fetching table names');
    }
}

module.exports = getTableNames;