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

    if (infoMercadoPago.status === "approved") {
      let payment_status = infoMercadoPago.status;
      await Billing.updateOne({ _id: id }, { $set: { payment_status } });

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.USSER,
          pass: process.env.PASS,
        },
      });

      transporter.sendMail({
        from: '"RentCar" <info.grupo.rentcar@gmail.com>',
        to: eMail,
        subject: "Su pago fue exitoso !!!",
        text: `Estimado Usuario:${users.name}`,
      });
    }
  } catch (error) {
    res.status(500).send({ mensage: `${error}` });
  }
});

module.exports = router;
