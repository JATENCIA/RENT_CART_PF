const express = require("express");
const router = express.Router();

const PaymentController = require("../Controllers/PaymentController");
const PaymentService = require("../services/PaymentService");
const PaymentInstance = new PaymentController(new PaymentService());
const Users = require("../Models/Users");
const Billing = require("../Models/Billing");

router.post("/", (req, res, next) => {
  PaymentInstance.getPaymentLink(req, res);
});

router.get("/success", async (req, res) => {
  try {
    const infoMercadoPago = req.query;
    let eMail = infoMercadoPago.external_reference;
    const users = await Users.findOne({ eMail });
    let id = users.billing[users.billing.length - 1];
    const billing = await Billing.find({ _id: id });
    console.log(billing[0].payment_status);
    let payment_status = infoMercadoPago.status;
    console.log(payment_status);
    billing[0].payment_status = payment_status;
    await Billing.updateOne({ _id: id }, { $set: billing[0].payment_status });
    await billing.save();
    res.status(200).json(infoMercadoPago);
  } catch (error) {
    res.status(500).send({ mensage: `${error}` });
  }
});

module.exports = router;
