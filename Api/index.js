const express = require("express");
const { MONGODB } = require("./db");
const userRoutes = require("./Src/Routes/Users");
const reviewRoutes = require("./Src/Routes/Review");
const router = require("./Src/Routes/Index");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// app.use("/", userRoutes);
// app.use("/", reviewRoutes);
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Welcome to PF API");
});

MONGODB();

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
