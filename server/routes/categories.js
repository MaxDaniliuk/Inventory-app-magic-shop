const { Router } = require("express");
const {
  getCategory
} = require("../controllers/categoriesController");


const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Will render category icons" });
});

router.get("/:category", getCategory);

module.exports = router;
