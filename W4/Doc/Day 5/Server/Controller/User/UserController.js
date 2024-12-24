const { user } = require("../../Data/User");


const getAlluser = (req, res) => {
  res.json(user);
};

// Request Query
const isCheck = true;
const apiUserController = (req, res) => {
  try {
    // const queryID = parseInt(req.query.age);
    const filterName = user.filter((e) => {
      return e.name === req.query.name && e.age === parseInt(req.query.age);
    });
    if (filterName.length > 0) {
      if (isCheck) {
        res.json(filterName);
        console.log(filterName);
      } else {
        res.send("No matching user found!");
        throw Error("Not found");
      }
    }
  } catch (err) {
    res.status(404).send(err);
  }
};
// so we have the libary  for handle the try catch block we have express aysnc handler by
// express aysnc handler
// npm install --save express-async-handler
/*
    const asyncHandler = require('express-async-handler')

    express.get('/', asyncHandler(async (req, res, next) => {
      const bar = await foo.findAll();
      res.send(bar)
}))*/
const postAlluser = (req, res) => {
  res.send("Post User requested");
};
const putAlluser = (req, res) => {
  res.send("Put book requested");
};
const deleteAlluser = (req, res) => {
  res.send("Delete Book requested");
};

exports.getAlluser = getAlluser;
exports.postAlluser = postAlluser;
exports.putAlluser = putAlluser;
exports.deleteAlluser = deleteAlluser;
exports.apiUserController = apiUserController;
