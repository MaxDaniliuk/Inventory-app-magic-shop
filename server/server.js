require("dotenv").config();
const express = require("express");
const categoriesRoutes = require("./routes/categories");
const itemsRoutes = require("./routes/items");
const seed = require("./db/seed");

const PORT = process.env.PORT;
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/categories", categoriesRoutes);
app.use("/api/items", itemsRoutes);

seed().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
  });
}).catch(err => {
  console.error("Failed to seed DB, not starting server:", err);
});