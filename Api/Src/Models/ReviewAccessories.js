const mongoose = require("mongoose");
const reviewAccessoriesSchema = mongoose.Schema({
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

  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
});

module.exports = mongoose.model("ReviewAccessories", reviewAccessoriesSchema);
