const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/myDb";
const dbConnecting = mongoose
  .connect(url, {})
  .then(() => {
    console.log("Connect to MongoDB Successfully");
  })
  .catch((err) => console.log(`Connect to MongoDB is ${err}`));

module.exports = dbConnecting;
