const express = require("express");
const router = express.Router();
const userRoutes = require("./Users");
const reviewRoutes = require("./Review");
const carRoutes = require("./Cars");
const accessoriesRoutes = require("./Accessories");
const reviewAccessoriesRoutes = require("./ReviewAccessories");

router.use("/users", userRoutes);
router.use("/review", reviewRoutes);
router.use("/cars", carRoutes);
router.use("/accessories", accessoriesRoutes);
router.use("/reviewAccessories", reviewAccessoriesRoutes);

module.exports = router;
