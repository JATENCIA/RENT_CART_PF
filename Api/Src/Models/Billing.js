const mongoose = require("mongoose");
const billingSchema = mongoose.Schema({
  invoice_number: {
    type: String,
    minLength: 4,
    unique: true,
    required: true,
  },

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
    minLength: 0,
    maxLength: 99,
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
});

module.exports = mongoose.model("Billings", billingSchema);
