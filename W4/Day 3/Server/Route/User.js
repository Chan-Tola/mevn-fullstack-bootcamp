const exprss = require("express");
const Route = exprss.Router();
const {
  getAlluser,
  postAlluser,
  putAlluser,
  deleteAlluser,
  apiUserController,
} = require("../Controller/User/UserController");

// // Now using user controller
Route.get("/", getAlluser);
Route.get("/api/user", apiUserController);
Route.post("/", postAlluser);
Route.put("/", putAlluser);
Route.delete("/", deleteAlluser);

module.exports = Route;
