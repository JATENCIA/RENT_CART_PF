const mongoose = require("mongoose");

const auth0Schema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

module.exports = mongoose.model("Auth0", auth0Schema);
