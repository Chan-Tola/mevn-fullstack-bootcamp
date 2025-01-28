const express = require("express");
const app = express();
const path = require("path");
const {
  login,
  book,
  CheckRequest,
  CheckLogin,
  Users,
} = require("./Route/DataRouting");

// create static file for generating htmlfile to web server
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// This the way we use the routing
app.use("/book", [CheckRequest, CheckLogin], book);
app.use("/login", [CheckRequest, CheckLogin], login);
app.use("/users", [CheckRequest, CheckLogin], Users);

const port = 3000;
app.listen(port, () => {
  console.log(`${port}`);
});
