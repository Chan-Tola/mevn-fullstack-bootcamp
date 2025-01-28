const express = require("express");
const Route = express.Router();

const { creataTweet, showTweet } = require("../Controller/TweetController");
Route.get("/tweets", showTweet);
Route.post("/tweets", creataTweet);
module.exports = Route;
