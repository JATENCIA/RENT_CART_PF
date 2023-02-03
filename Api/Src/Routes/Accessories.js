const express = require("express");
const accessoriesSchema = require("../Models/Accessories");
const router = express.Router();

/* This is a post request that is saving the data to the database. */
router.post("/", (req, res) => {
  const accessories = accessoriesSchema(req.body);
  accessories
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a get request that is getting the data from the database. */
router.get("/", (req, res) => {
  accessoriesSchema
    .find()
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a get request that is getting the data from the database. */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  accessoriesSchema

    .findById(id)
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a put request that is updating the data from the database. */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, preci, description, image, discount } = req.body;
  accessoriesSchema

    .updateOne(
      { _id: id },
      { $set: { name, preci, description, image, discount } }
    )
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  accessoriesSchema

    .updateOne({ _id: id }, { $set: { status } })
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
