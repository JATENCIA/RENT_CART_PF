const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  licensePlate: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 10,
  },
  brand: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  image: {
    type: String,
    required: true,
    default:
      "https://bateriasparacarrosbogota.com/wp-content/uploads/2017/10/baterias-para-carro-spark.png",
  },
  status: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
  preci: {
    type: Number,
    required: true,
    minLength: 1,
  },
  description: {
    type: String,
    required: true,
    minLength: 30,
    maxLength: 500,
  },
  fuelConsumption: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  location: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 200,
  },
  colour: [
    {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 15,
    },
  ],
  discount: {
    type: Number,
    default: 0,
    maxLength: 99,
  },
  doors: {
    type: Number,
    required: true,
  },
  line: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  category: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  fuelType: {
    type: String,
    enum: ["gasoline", "electric", "gas", "hybrid"],
    default: "gasoline",
  },
  typeOfBox: {
    type: String,
    enum: ["automatic", "Handbook", "semiautomatic"],
    default: "Handbook",
  },
  review: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
});
module.exports = mongoose.model("Cars", carSchema);
