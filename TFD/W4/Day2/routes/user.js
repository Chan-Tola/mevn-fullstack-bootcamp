const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Login successful in GET request");
});
// roters get with request parameters from the server
router.get("/:id/:address", (req, res) => {
  res.send("Id Request :" + req.params.id + " , Address Request :" + req.params.address);
});

//router post
router.post("/post", (req, res) => {
    res.send("Login successful in POST request");
});

//router put
router.put("/put", (req, res) => {
    res.send("Login successful in PUT request");
});

//router delete
router.delete("/delete", (req, res) => {
  res.send("login successful in DELETE request");
});

module.exports = router;
