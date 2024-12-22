const express = require("express");
const Route = express.Router();

Route.get("/", (req, res) => {
  res.send("welcom to server login");
});
Route.get("/:id", (req, res) => {
  res.send(`Param id : ${req.params.id}`);
  console.log("ID : " + req.params.id);
});
Route.put("/", (req, res) => {
  res.send("Put login request");
});
Route.post("/", (req, res) => {
  res.send("post login request");
});
Route.delete("/", (req, res) => {
  res.send("delete login request");
});
module.exports = Route;
