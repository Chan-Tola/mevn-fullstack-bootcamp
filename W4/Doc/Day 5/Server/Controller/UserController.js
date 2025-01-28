const User = require("../Model/User");
const asyncHandler = require("express-async-handler");
// so we have the libary  for handle the try catch block we have express aysnc handler by
// express aysnc handler
// npm install --save express-async-handler
/*
    const asyncHandler = require('express-async-handler')

    express.get('/', asyncHandler(async (req, res, next) => {
      const bar = await foo.findAll();
      res.send(bar)
}))*/

const getAlluser = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
});

const CreateUser = asyncHandler(async (req, res) => {
  const newUser = new User(req.body);
  const result = await newUser.save();
  res.send(result);
  if (result) {
    console.log(result);
  } else {
    console.log("something went wrong");
  }
});
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { email, username, dataofBirth, passwords } = req.body;
  const newUpdateUser = await User.findByIdAndUpdate(
    id,
    { email, username, dataofBirth, passwords },
    { new: true }
  );
  if (!newUpdateUser) {
    res.status(400).send("update not completed");
  } else {
    const allUser = await User.find();
    res.status(200).json(allUser);
  }
});

exports.getAlluser = getAlluser;
exports.CreateUser = CreateUser;
exports.updateUser = updateUser;
