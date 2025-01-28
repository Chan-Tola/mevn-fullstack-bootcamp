const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  dataofBirth: Date,
  passwords: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
