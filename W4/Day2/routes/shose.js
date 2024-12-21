const express = require("express");
const routers = express.Router();
const {shoes,shoes1} = require("../Data/shose");

routers.get("/", (req, res) => {
  // const shoseStore = shoes.find((item) => item.id == 1);
  // res.send(shoseStore);
  res.send(shoes);
});
routers.get("/:id", (req, res) => {
  const id = req.params.id;
  const { name, age } = req.query;
  // res.send("id :" + id);
  res.send(`id : ${id} Name : ${name}, Age : ${age}`);
});

module.exports = routers;
