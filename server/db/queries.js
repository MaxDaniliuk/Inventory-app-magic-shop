const pool = require("./pool");
const getTableNames = require("./getTableNames");

async function selectAllItems() {
    const allItems = [];
    const tableNames = await getTableNames();

    for (const tableName of tableNames ) {
        const { rows } = await pool.query(`SELECT * FROM ${tableName}`);
        if (rows.length > 0) {
            allItems.push(...rows);
        }
    }  
    return allItems;
}

async function selectSingleItem(category, id) {
    const tableNames = await getTableNames();
    const targetCategory = tableNames.find(cat => cat === category)
    if (!targetCategory) {
        throw new Error("Item does not exist");
    }

    const { rows } = await pool.query(`SELECT * FROM ${targetCategory} WHERE id=$1 AND category=$2`, [id, targetCategory]);
    if (rows.length < 1) {
        throw new Error("Item does not exist");
    } 
    return rows;
}

async function selectSingleCategory(category) {
    const tableNames = await getTableNames();
    const targetCategory = tableNames.find(cat => cat === category);
    if (!targetCategory) {
        throw new Error("Category does not exist");
    }

    const { rows } = await pool.query(`SELECT * FROM ${targetCategory}`);
    if (rows.length < 1) {
        throw new Error("Category does not exist");
    } 
    return rows;
}

module.exports = {
    selectAllItems,
    selectSingleItem,
    selectSingleCategory
}