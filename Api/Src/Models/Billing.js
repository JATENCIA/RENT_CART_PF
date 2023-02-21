const mongoose = require("mongoose");
const billingSchema = mongoose.Schema({
  full_value: {
    type: Number,
    minLength: 0,
    required: true,
  },

  invoice_number: {
    type: String,
    minLength: 4,
    unique: true,
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

  deadline: {
    type: String,
    required: true,
  },
  rentalDate: {
    type: String,
    required: true,
  },

  qualified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Billings", billingSchema);
