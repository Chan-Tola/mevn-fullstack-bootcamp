const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
const {
  login,
  CheckRequest,
  CheckLogin,
  Users,
} = require("../Route/DataRouting");

app.use(cors());

// create static file for generating htmlfile to web server
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// This the way we use the routing
app.use("/login", [CheckRequest, CheckLogin], login);
app.use("/users", [CheckRequest, CheckLogin], Users);
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
