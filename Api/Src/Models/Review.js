const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  description: {
    type: String,
    minLength: 10,
    maxLength: 250,
  },
  rate: {
    type: Number,
    minLength: 0,
    maxLength: 5,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  car: {
    type: mongoose.Types.ObjectId,
    ref: "Cars",
  },
  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
});

module.exports = mongoose.model("Review", reviewSchema);
