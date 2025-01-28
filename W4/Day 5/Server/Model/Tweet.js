const mongoose = require("mongoose");
const tweetSchema = new mongoose.Schema({
  text: String,
  // ref = refernec tv kan model del  yg jg dak ker User model
  byUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createDate: { type: Date, default: Date.now() },
});

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
