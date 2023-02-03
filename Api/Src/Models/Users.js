const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  kindOfPerson: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 15,
  },
  eMail: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    ref: "Location",
    required: true,
  },
  telephone: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
  },
  roll: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
  review: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
  reviewAccesories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ReviewAccessories",
    },
  ],
});

module.exports = mongoose.model("Users", userSchema);
