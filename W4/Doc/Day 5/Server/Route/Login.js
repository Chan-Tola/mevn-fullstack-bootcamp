const express = require("express");
const Route = express.Router();
const {
  getAllLogin,
  getAllLoginWithParam,
  postAllLogin,
  deleteAllLogin,
  putAllLogin,
} = require("../Controller/LoginController");
Route.get("/", getAllLogin);
Route.get("/:id", getAllLoginWithParam);
Route.put("/", putAllLogin);
Route.post("/", postAllLogin);
Route.delete("/", deleteAllLogin);
module.exports = Route;
