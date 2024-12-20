const express = require("express");
const routers = express.Router();
const libery = require("../Data/book");
const middleWare = require("../middleware/auth");

routers.get("/", middleWare.auth, middleWare.auth2, (req, res) => {
  res.send(libery);
  // res.send(libery.book1);
  // res.send(libery.books);
});

module.exports = routers;
