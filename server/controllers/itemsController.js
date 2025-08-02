const db = require("../db/queries");

const getItems = async (req, res) => {
    try {
        const items = await db.selectAllItems();
        if (items.length < 1) {
            res.status(200).json([{message: "There are no items"}]);
        }
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json([{message: "Shop inventorization... Come back later"}]);
    }
    
};

const getItem = async (req, res) => {
    const {category, id} = req.params;
    try {
        const item = await db.selectSingleItem(category.toLowerCase(), parseInt(id));
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json([{message: error.message}]);
    }
    
};

module.exports = {
    getItems,
    getItem
}