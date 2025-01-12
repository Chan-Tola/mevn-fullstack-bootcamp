const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const User = require("../Model/User");
const Tweet = require("../Model/Tweet");
const {
  login,
  CheckRequest,
  CheckLogin,
  Users,
} = require("../Route/DataRouting");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/myDb";

dotenv.config();
app.use(cors());
app.use(express.json());
// create static file for generating htmlfile to web server
app.use(express.static(path.resolve(__dirname, "../client/dist")));

const dbConnect = async () => {
  await mongoose.connect(url);
};

mongoose.connection.on("connected", () => {
  console.log("connected");
});
mongoose.connection.on("open", () => {
  console.log("open");
});

dbConnect().catch((err) => {
  console.log(err);
});
// This the way we use the routing
app.use("/login", [CheckRequest, CheckLogin], login);
app.use("/users", [CheckRequest, CheckLogin], Users);

// create function handle
const createTweet = async () => {
  const user = User.findById("676fe61e353786c396b95342");
};
const getTweet = () => {};

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
