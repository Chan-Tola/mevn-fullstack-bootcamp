const express = require("express");
const Route = express.Router();
const {
  getAlluser,
  CreateUser,
  updateUser,
} = require("../Controller/UserController");

// // Now using user controller
Route.get("/users", getAlluser);
Route.post("/users/post", CreateUser);
Route.put("/users/put/:id", updateUser);
module.exports = Route;
