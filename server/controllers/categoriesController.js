const db = require("../db/queries");

const getCategories = async (req, res) => {};

const getCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const targetCategory = await db.selectSingleCategory(category.toLowerCase());
        res.status(200).json(targetCategory);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

module.exports = {
    getCategory
}