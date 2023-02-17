const Users = require("../Models/Users");
const Cars = require("../Models/Cars");

/**
 * It checks if a user has already made a review on a car
 * @param req - The request object.
 * @param res - The response object.
 */
const validateReview = async (req, res) => {
  const review = reviewSchema(req.body);
  const user = await Users.findById(review.user);
  const car = await Cars.findById(review.car);

  review.forEach((element) => {
    if (element.user === user._id && element.car === car._id)
      return res
        .status(304)
        .json("Sorry, you can't make more comments about this vehicle.");
  });
};

module.exports = { validateReview };
