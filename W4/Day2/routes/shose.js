const express = require("express");
const routers = express.Router();
const shoseStores = require("../Data/shose");

routers.get("/", (req, res) => {
  // const Shose = shoseStores.find((item) => item.id == 1);
  res.send(Shose);
  // res.send(shoseStores.shoses);
  // res.send(shoseStores.shoses1);
});
routers.get("/:id", (req, res) => {
  const id = req.params.id;
  const { name, age } = req.query;
  res.send("id :" + req.params.id);
  // res.send(`id : ${id} Name : ${name}, Age : ${age}`);
});

module.exports = routers;
