const db = require("../db/queries");
const getTableNames = require("../db/getTableNames");

const getCategories = async (req, res) => {
    try {
        const categories = await getTableNames();
        if (categories.length < 1) {
            throw new Error("No categories exist");
        }
        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json([{message: error.message}]);
    }
};

const getCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const targetCategory = await db.selectSingleCategory(category.toLowerCase());
        res.status(200).json(targetCategory);
    } catch (error) {
        res.status(404).json([{message: error.message}]);
    }
};

module.exports = {
    getCategories,
    getCategory
}