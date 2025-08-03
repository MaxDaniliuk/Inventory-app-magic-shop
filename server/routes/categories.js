const { Router } = require("express");
const {
  getCategories,
  getCategory
} = require("../controllers/categoriesController");


const router = Router();

router.get("/", getCategories);

router.get("/:category", getCategory);

module.exports = router;
