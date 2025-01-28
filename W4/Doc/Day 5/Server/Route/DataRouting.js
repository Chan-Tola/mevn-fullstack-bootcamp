const login = require("./Login");
const Users = require("./UserRoute");
const Tweets = require("./TweetRoute");
const CheckRequest = require("../middleware/CheckReq");
const CheckLogin = require("../middleware/CheckLogin");
module.exports = { login, CheckRequest, CheckLogin, Users, Tweets };
