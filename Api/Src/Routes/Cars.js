const express = require("express");
const carSchema = require("../Models/Cars");
const Users = require("../Models/Users");
const router = express.Router();

/* This is a post request that is being sent to the server. */
router.post("/", (req, res) => {
  const car = carSchema(req.body);
  car
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a get request that is being sent to the server. */
router.get("/", (req, res) => {
  carSchema
    .find()
    .populate("review", { description: 1, rate: 1, user: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a get request that is being sent to the server. */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  carSchema
    .findById(id)
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a put request that is being sent to the server. */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const {
    brand,
    preci,
    description,
    fuelConsumption,
    location,
    colour,
    discount,
    doors,
    line,
    category,
    fuelType,
    typeOfBox,
    licensePlate,
    image,
  } = req.body;
  carSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          brand,
          preci,
          description,
          fuelConsumption,
          location,
          colour,
          discount,
          doors,
          line,
          category,
          fuelType,
          typeOfBox,
          licensePlate,
          image,
        },
      }
    )
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a delete request that is being sent to the server. */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  carSchema
    .updateOne({ _id: id }, { $set: { active } })
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
