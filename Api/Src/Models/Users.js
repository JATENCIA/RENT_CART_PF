const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 50,
  },
  image: {
    type: String,
    required: true,
    default: "http://cdn.onlinewebfonts.com/svg/img_141364.png",
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  dni: {
    type: Number,
    require: true,
    unique: true,
    minLength: 7,
    maxLength: 10,
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
    minLength: 9,
  },
  roll: {
    type: String,

    enum: ["admin", "user", "superAdmin"],

    enum: ["user", "admin", "superAdmin"],

    default: "user",
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
  password: {
    type: String,
    required: true,
  },

  favorite: {
    type: Array,
  },

  loading: {
    type: String,
    enum: ["valid", "invalid"],
    default: "invalid",
  },
});

module.exports = mongoose.model("Users", userSchema);

//admin nombre apellido email password
// incriptar password
// password para user
// hacer el pdf mero capricho
// mercado pago
