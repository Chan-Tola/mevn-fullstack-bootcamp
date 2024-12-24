const login = require("./Login");
const Users = require("./User");
const CheckRequest = require("../middleware/CheckReq");
const CheckLogin = require("../middleware/CheckLogin");
module.exports = { login, CheckRequest, CheckLogin, Users };
