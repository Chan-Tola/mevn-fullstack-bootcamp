const Tweets = require("../Model/Tweet");
const asyncHandler = require("express-async-handler");
const User = require("../Model/User");

const showTweet = asyncHandler(async (req, res) => {
  const tweets = await Tweets.find().populate("byUser", "username email");
  res.status(200).json(tweets);
});

const creataTweet = asyncHandler(async (req, res) => {
  const { text, byUser } = req.body;

  const user = User.findById(byUser);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const tweet = new Tweets({
    text,
    byUser,
  });
  const saveTweet = await tweet.save();
  res.status(201).json(saveTweet);
});

exports.creataTweet = creataTweet;
exports.showTweet = showTweet;
