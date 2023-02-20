const express = require("express");
const router = express.Router();
const Cars = require("../Models/Cars");
const Users = require("../Models/Users");
const Billing = require("../Models/Billing");
const billingSchema = require("../Models/Billing");
const Accessories = require("../Models/Accessories");

/* This is a post request that is looking for the billing information. */
router.post("/", async (req, res) => {
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
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
});

/* This is a get request that is looking for the billing information. */
router.get("/", async (req, res) => {
  const { invoice_number } = req.query;
  try {
    const billing = await Billing.find({})
      .populate("user", {
        name: 1,
        lastName: 1,
        eMail: 1,
        telephone: 1,
        dni: 1,
      })
      .populate("car", { licensePlate: 1, line: 1, price: 1 })
      .populate("accessories", { name: 1, price: 1 });

    if (invoice_number) {
      let billing_invoice_number = billing.filter(
        (billing) => billing.invoice_number === invoice_number
      );

      billing_invoice_number.length
        ? res.status(200).json(billing_invoice_number)
        : res.status(201).json("Not found");
    } else res.status(200).json(billing);
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
});

/* This is a get request that is looking for the billing information. */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const billing = await Billing.findById(id)
      .populate("user", {
        name: 1,
        lastName: 1,
        eMail: 1,
        telephone: 1,
        dni: 1,
      })
      .populate("car", { licensePlate: 1, line: 1, price: 1 })
      .populate("accessories", { name: 1, price: 1 });

    billing ? res.status(200).json(billing) : res.status(201).json("Not found");
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
});

/* This is a put request that is looking for the billing information. */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { full_value, discount, user, car, accessories } = req.body;
  try {
    const billing = await Billing.updateOne(
      { _id: id },
      {
        $set: {
          full_value,
          discount,
          user,
          car,
          accessories,
        },
      }
    )
      .populate("user", {
        name: 1,
        lastName: 1,
        eMail: 1,
        telephone: 1,
        dni: 1,
      })
      .populate("car", { licensePlate: 1, line: 1, price: 1 })
      .populate("accessories", { name: 1, price: 1 });

    billing
      ? res.status(200).json(billing)
      : res.status(201).json("Not update");
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
});

/* This is a delete request that is looking for the billing information. */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  billingSchema
    .updateOne({ _id: id }, { $set: { active } })
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
});

module.exports = router;
