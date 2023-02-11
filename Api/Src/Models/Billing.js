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
    minLength: 1,
    maxLength: 3,
  },

  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
});

module.exports = mongoose.model("Billings", billingSchema);
