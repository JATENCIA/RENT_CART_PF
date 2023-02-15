const axios = require("axios");

class PaymentService {
  async createPayment(req, res) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const shoppingcart = req.body;
    const body = {
      payer_email: shoppingcart.eMail,
      payer_identification: {
        type: "DNI",
        number: shoppingcart.dni,
      },
      items: [
        {
          title: shoppingcart.line,
          description: "RENT CAR PF",
          picture_url: shoppingcart.image,
          currency_id: "USD",
          quantity: shoppingcart.quantity,
          unit_price:
            shoppingcart.discount !== 0
              ? shoppingcart.price - shoppingcart.discount
              : shoppingcart.price,
          discount: shoppingcart.discount,
        },
      ],
      payment_methods: {
        excluded_payment_types: [
          {
            id: "atm",
          },
        ],
        installments: 1,
      },
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success",
      },
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return { url: payment.data.init_point, id: payment.data.id };
  }
}

module.exports = PaymentService;
