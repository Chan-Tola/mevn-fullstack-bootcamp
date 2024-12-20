const express = require("express");
const app = express();
const port = 8080;
const middleWare = require("./middleware/auth.js");
const users = require("./routes/user.js");
const books = require("./routes/book.js");
const carStores = require("./routes/car.js");
const shoseStores = require("./routes/shose.js");

// this is way that we can access to see all the routes on the server on the website 
// if we write it http://localhost:8080
app.use(express.static("frontend/dist"));
// http://localhost:8080/api/user
app.use("/api/user", middleWare.auth, users);
// http://localhost:8080/api/books
app.use("/api/books", books);
// http://localhost:8080/api/cars
app.use("/api/cars", carStores);
// http://localhost:8080/api/shose
app.use("/api/shoses", shoseStores);

// listen on port 8080
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
