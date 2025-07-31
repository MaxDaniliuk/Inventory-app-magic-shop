const { Router } = require("express");
const {
  getItems,
  getItem
} = require("../controllers/itemsController");

const router = Router();

router.get("/", getItems);

router.get("/:category/:id", getItem);

module.exports = router;
