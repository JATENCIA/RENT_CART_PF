const express = require("express");
const router = express.Router();

/* This is importing the routes from the files that are in the same directory as this file. */
const carRoutes = require("./Cars");
const userRoutes = require("./Users");
const auth0Signin = require("./auth0");
const auth0Signup = require("./auth0");
const reviewRoutes = require("./Review");
const billingRoutes = require("./Billing");
const paymentRoutes = require("./Payment");
const accessoriesRoutes = require("./Accessories");
const reviewAccessoriesRoutes = require("./ReviewAccessories");

/* Telling the server to use the routes in the files that are imported. */
router.use("/cars", carRoutes);
router.use("/users", userRoutes);
router.use("/signin", auth0Signin);
router.use("/signup", auth0Signup);
router.use("/review", reviewRoutes);
router.use("/billing", billingRoutes);
router.use("/payment", paymentRoutes);
router.use("/accessories", accessoriesRoutes);
router.use("/reviewAccessories", reviewAccessoriesRoutes);

module.exports = router;
