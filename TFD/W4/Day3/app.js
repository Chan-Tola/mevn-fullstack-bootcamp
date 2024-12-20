const express = require("express");
const app = express();
const port = 4000;
const UserMiddleWare = require("./Middleware/user.js");
const routerBookData = require("./Routes/books.js");

app.use(express.static("frontend/dist"));
app.use("/api/user", UserMiddleWare.user, (req, res) => {
  res.send("Hello");
});
app.use("/api/books", routerBookData);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
