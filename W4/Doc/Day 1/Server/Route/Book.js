const exprss = require("express");
const Route = exprss.Router();
const { book } = require("../Data/Data");

Route.get("/", (req, res) => {
  res.send("welcome to book requested");
});
Route.get("/api", (req, res) => {
  res.json(book);
});
Route.get("/api/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const findDataBook = book.find((e) => {
    return e.id === id;
  });
  console.log(findDataBook);
  res.send(findDataBook);
});
Route.get("/:id", (req, res) => {
  res.send(`Param id : ${req.params.id}`);
  console.log("ID : " + req.params.id);
});
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
