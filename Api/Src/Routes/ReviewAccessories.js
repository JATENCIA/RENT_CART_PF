const express = require("express");
const reviewAccessoriesSchema = require("../Models/ReviewAccessories");
const Users = require("../Models/Users");

const router = express.Router();

/* This is a post request that is going to create a new review. */
router.post("/", async (req, res) => {
  const review = reviewAccessoriesSchema(req.body);
  const user = await Users.findById(review.user);

  const newReview = new ReviewAccessories({
    description: review.description,
    rate: review.rate,
    user: user._id,
  });

  try {
    const saveReview = await newReview.save();
    user.review = user.review.concat(saveReview._id);
    await user.save();
    res.json(saveReview);
  } catch (error) {
    res.send({ messaje: error });
  }
});

/* This is a get request that is going to get all the reviews. */
router.get("/", async (req, res) => {
  const review = await reviewAccessoriesSchema.find({}).populate("user", {
    name: 1,
    lastName: 1,
    eMail: 1,
    telephone: 1,
  });
  res.json(review);
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
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
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
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
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
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
