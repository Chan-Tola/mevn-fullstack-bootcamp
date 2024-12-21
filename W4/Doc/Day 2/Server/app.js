const express = require("express");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/api", (req, res) => {
  res.send("api calling");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
