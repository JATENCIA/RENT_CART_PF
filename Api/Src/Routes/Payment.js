const express = require("express");
const router = express.Router();

const PaymentController = require("../Controllers/PaymentController");
const PaymentService = require("../services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());

router.post("/", (req, res, next) => {
  PaymentInstance.getPaymentLink(req, res);
});

router.get("/success", async (req, res) => {
  try {
    const infoMercadoPago = req.query;
    console.log(infoMercadoPago);
    res.status(200).json(infoMercadoPago);
  } catch (error) {
    res.status(500).send({ mensage: `${error}` });
  }
});

module.exports = router;
