const exprss = require("express");
const Route = exprss.Router();
const { user } = require("../Data/User");

// Request Query

const isCheck = true;

Route.get("/", (req, res) => {
  let filterName;
  try {
    filterName = user.filter((e) => {
      return e.name === req.query.name || e.age == req.query.age;
    });
    if (filterName.length > 0) {
      if (isCheck) {
        res.json(filterName); // Send matching users if found
      } else {
        res.status(404).send("No matching user found");
        throw Error("Not found");
      }
    }
  } catch (err) {
    res.status(404).send(err);
  }
});
// so we have the libary  for handle the try catch block we have express aysnc handler by
// express aysnc handler
// npm install --save express-async-handler
/*
    const asyncHandler = require('express-async-handler')

    express.get('/', asyncHandler(async (req, res, next) => {
      const bar = await foo.findAll();
      res.send(bar)
}))*/
Route.post("/", (req, res) => {
  res.send("Post book requested");
});
Route.put("/", (req, res) => {
  res.send("Put book requested");
});
Route.delete("/", (req, res) => {
  res.send("Delete Book requested");
});

module.exports = Route;
