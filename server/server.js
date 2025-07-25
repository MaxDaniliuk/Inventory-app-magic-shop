require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to magic shop!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
