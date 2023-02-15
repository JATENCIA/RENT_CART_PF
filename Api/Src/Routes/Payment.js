const express = require("express");
const router = express.Router();

const PaymentController = require("../Controllers/PaymentController");
const PaymentService = require("../services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());

router.get("/", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});

module.exports = router;
