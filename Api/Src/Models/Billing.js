const mongoose = require("mongoose");
const billingSchema = mongoose.Schema({
  full_value: {
    type: Number,
    default: 0,
    minLength: 0,
    required: true,
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },

  car: {
    type: mongoose.Types.ObjectId,
    ref: "Cars",
  },

  accessories: {
    type: Array(mongoose.Types.ObjectId),
    ref: "Accessories",
  },

  discount: {
    type: Number,
    default: 0,
    minLength: 1,
    maxLength: 3,
  },

  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },

  Deadline: {
    type: Date,
    required: true,
  },

  Deadline_iso: {
    type: Date,
    required: true,
  },
  rentalDate_iso: {
    type: Date,
    required: true,
  },

  qualified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Billings", billingSchema);
