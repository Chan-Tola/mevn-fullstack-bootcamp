const login = require("./Login");
const book = require("./Book");
const CheckRequest = require("../middleware/CheckReq");
const CheckLogin = require("../middleware/CheckLogin");
module.exports = { login, book, CheckRequest, CheckLogin };
