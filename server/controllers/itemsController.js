const db = require("../db/queries");

const getItems = async (req, res) => {
    try {
        const items = await db.selectAllItems();
        if (items.length < 1) {
            res.status(200).json([{message: "There are no items"}]);
        }
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({message: "Shop inventorization... Come back later"});
    }
    
};

module.exports = {
    getItems
}