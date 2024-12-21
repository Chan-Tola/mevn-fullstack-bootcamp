const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Path get");
});
app.get("/api", (req, res) => {
  res.send("Path get/api request");
});
app.post("/post", (req, res) => {
  res.send("Path post");
});
app.put("/put", (req, res) => {
  res.send("Path put");
});
app.delete("/delete", (req, res) => {
  res.send("Path delete");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
