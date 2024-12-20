const express = require("express");
const routers = express.Router();
const carStores = require("../Data/car.js");

routers.get("/", (req, res) => {
    res.send(carStores);  
    // res.send(carStores.car);
    // res.send(carStores.car1);
});

module.exports = routers;
