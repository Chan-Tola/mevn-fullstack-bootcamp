const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  username: String,
  dataofBirth: Date,
  passwords: String,
  followers: [],
  following: [],
  tweets: [],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
