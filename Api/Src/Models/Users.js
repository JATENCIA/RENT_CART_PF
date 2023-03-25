const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  lastName: {
    type: String,
  },

  dni: {
    type: Number,
    unique: true,
    minLength: 7,
    maxLength: 10,
  },

  kindOfPerson: {
    type: String,
    enum: ["natural", "business"],
    default: "natural",
  },

  eMail: {
    type: String,
    required: true,
    unique: true,
  },

  location: {
    type: String,
    ref: "Location",
  },

  telephone: {
    type: String,
    unique: true,
    minLength: 9,
  },

  roll: {
    type: String,
    enum: ["admin", "user", "superAdmin"],
  },
  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },

  billing: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Billings",
    },
  ],
  reviewAccesories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ReviewAccessories",
    },
  ],

  review: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],

  favorites: {
    type: Array,
  },

  loading: {
    type: String,
    enum: ["valid", "invalid"],
    default: "invalid",
  },
});

module.exports = mongoose.model("Users", userSchema);
