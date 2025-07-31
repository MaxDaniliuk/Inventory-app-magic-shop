const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Render homepage with navs and links to items and categories" });
});

module.exports = router;
