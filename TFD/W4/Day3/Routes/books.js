const express = require("express");
const routers = express.Router();
const booksData = require('../Data/books');

routers.get('/',(req,res)=>{
    res.send(booksData);
});

module.exports = routers;