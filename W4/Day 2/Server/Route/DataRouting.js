const login = require("./Login");
const book = require("./Book");
const CheckRequest = require("../middleware/CheckReq");
const CheckLogin = require("../middleware/CheckLogin");
const Users = require("./User");
module.exports = { login, book, CheckRequest, CheckLogin, Users };
