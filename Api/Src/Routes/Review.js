const express = require("express");
const reviewSchema = require("../Models/Review");
const Users = require("../Models/Users");
const Cars = require("../Models/Cars");
const Review = require("../Models/Review");
const router = express.Router();

/* This is a post request that is going to create a new review. */
router.post("/", async (req, res) => {
  const review = reviewSchema(req.body);
  const user = await Users.findById(review.user);
  const car = await Cars.findById(review.car);

  const newReview = new Review({
    description: review.description,
    rate: review.rate,
    user: user._id,
    car: car._id,
  });

  try {
    const saveReview = await newReview.save();
    console.log(saveReview);
    user.review = user.review.concat(saveReview._id);
    await user.save();
    car.review = car.review.concat(saveReview._id);
    await car.save();
    res.json(saveReview);
  } catch (error) {
    res.send({ messaje: error });
  }
});

/* This is a get request that is going to get all the reviews. */
router.get("/", async (req, res) => {
  const review = await Review.find({})
    .populate("user", {
      name: 1,
      lastName: 1,
      eMail: 1,
      telephone: 1,
      licensePlate: 1,
      line: 1,
    })
    .populate("car", { licensePlate: 1, line: 1 });
  res.json(review);
});

/* This is a get request that is going to get a review by id. */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  reviewSchema
    .findById(id)
    .populate("user", {
      name: 1,
      lastName: 1,
      eMail: 1,
      telephone: 1,
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a put request that is going to update a review by id. */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  reviewSchema
    .updateOne({ _id: id }, { $set: { description } })
    .populate("user", {
      name: 1,
      lastName: 1,
      eMail: 1,
      telephone: 1,
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a delete request that is going to delete a review by id. */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  reviewSchema
    .updateOne({ _id: id }, { $set: { active } })
    .populate("user", {
      name: 1,
      lastName: 1,
      eMail: 1,
      telephone: 1,
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
