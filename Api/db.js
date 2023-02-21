const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.USSER);
console.log(process.env.PASS);
const MONGODB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) =>
      console.error("Error connection to MongoDB", error.message)
    );
};

module.exports = { MONGODB };
