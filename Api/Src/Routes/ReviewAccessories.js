const express = require("express");
const reviewAccessoriesSchema = require("../Models/ReviewAccessories");
const Users = require("../Models/Users");
const Accessories = require("../Models/Accessories");

const router = express.Router();
const {validateCreate} = require('../Validators/ReviewAccessories.js');

/* This is a post request that is going to create a new review. */
router.post("/", async (req, res) => {
  validateCreate
  try {
    const review = reviewAccessoriesSchema(req.body);
    const user = await Users.findById(review.user);
    const accessories = await Accessories.findById(review.user);

    const newReview = new ReviewAccessories({
      description: review.description,
      rate: review.rate,
      user: user._id,
      accessories: accessories._id,
    });

    const saveReview = await newReview.save();
    user.review = user.review.concat(saveReview._id);
    await user.save();
    accessories.review = accessories.review.concat(saveReview._id);
    await accessories.save();
    res.status(200).json(saveReview);
  } catch (error) {
    res.status(500).send({ messaje: `${error}` });
  }
});

/* This is a get request that is going to get all the reviews. */
router.get("/", async (req, res) => {
  try {
    const review = await reviewAccessoriesSchema
      .find({})
      .populate("user", {
        name: 1,
        lastName: 1,
        eMail: 1,
        telephone: 1,
      })
      .populate("accessories", { name: 1, price: 1 });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).send({ messaje: `${error}` });
  }
});

/* This is a get request that is going to get a review by id. */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  reviewAccessoriesSchema
    .findById(id)
    .populate("user", {
      name: 1,
      lastName: 1,
      eMail: 1,
      telephone: 1,
    })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).send({ messaje: `${error}` }));
});

/* This is a put request that is going to update a review by id. */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  reviewAccessoriesSchema
    .updateOne({ _id: id }, { $set: { description } })
    .populate("user", {
      name: 1,
      lastName: 1,
      eMail: 1,
      telephone: 1,
    })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).send({ messaje: `${error}` }));
});

/* This is a delete request that is going to delete a review by id. */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  reviewAccessoriesSchema
    .updateOne({ _id: id }, { $set: { active } })
    .populate("user", {
      name: 1,
      lastName: 1,
      eMail: 1,
      telephone: 1,
    })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).send({ messaje: `${error}` }));
});

module.exports = router;
