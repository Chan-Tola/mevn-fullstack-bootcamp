const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  text:String,
  byUser: { type: mongoose.Types.ObjectId, ref: "User" },
  createDate: { type: Date, require: true },
});

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
