const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
  photo: String,
  class: String,
  stream: String,
  school: String,
});

module.exports = mongoose.model("User", userSchema);
