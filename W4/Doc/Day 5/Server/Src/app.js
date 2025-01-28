const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const User = require("../Model/User");
const {
  login,
  CheckRequest,
  CheckLogin,
  Users,
  Tweets,
} = require("../Route/DataRouting");
const dbConnecting = require("../db/connectionDb");

dotenv.config();
app.use(cors());
app.use(express.json());
// create static file for generating htmlfile to web server
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// This the way we use the routing
app.use("/login", [CheckRequest, CheckLogin], login);
app.use("/api", [CheckRequest, CheckLogin], Users);
app.use("/api", [CheckRequest, CheckLogin], Tweets);
// connectiong MongoDB
dbConnecting
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Servers is listenning on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(`Server is running ${err}`));
