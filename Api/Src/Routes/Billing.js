const express = require("express");
const {
  routerPostBilling,
  routerGetBilling,
  routerGetByidBilling,
  routerPutBilling,
  routerDeleteBilling,
} = require("../Controllers/BillingController");
const router = express.Router();

/* This is a post request that is looking for the billing information. */
<<<<<<< HEAD
router.post("/", async (req, res) => {
  validateCreate
  try {
    const billing = billingSchema(req.body);
    const user = await Users.findById(billing.user);
    const car = await Cars.findById(billing.car);

    const newBilling = await new Billing({
      full_value: billing.full_value,
      discount: billing.discount,
      invoice_number: billing.invoice_number,
      user: user._id,
      car: car._id,
      accessories: billing.accessories,
    });

    const saveBilling = await newBilling.save();
    user.billing = user.billing.concat(saveBilling._id);
    await user.save();
    car.billing = car.billing.concat(saveBilling._id);
    await car.save();
    billing.accessories?.forEach(async (element) => {
      let accessories = await Accessories.findById(element);
      accessories.billing = accessories.billing.concat(saveBilling._id);
      await accessories.save();
    });
    res.status(200).json("successful billing");
      eMail3 //(pasar datos de  donde viaja el email del usuario, arriba no encuentro de que este)
    } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
=======
router.post("/", (req, res) => {
  routerPostBilling(req, res);
>>>>>>> 3d82f09ae61d378f4bdfe490f653736bce3a5992
});

/* This is a get request that is looking for the billing information. */
router.get("/", (req, res) => {
  routerGetBilling(req, res);
});

/* This is a get request that is looking for the billing information. */
router.get("/:id", async (req, res) => {
  routerGetByidBilling(req, res);
});

/* This is a put request that is looking for the billing information. */
router.put("/:id", async (req, res) => {
  routerPutBilling(req, res);
});

/* This is a delete request that is looking for the billing information. */
router.delete("/:id", (req, res) => {
  routerDeleteBilling(req, res);
});

module.exports = router;
