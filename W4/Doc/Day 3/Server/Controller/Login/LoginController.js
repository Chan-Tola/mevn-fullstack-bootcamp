exports.getAllLogin = (req, res) => {
  res.send("welcom to server login");
};
// login get param
exports.getAllLoginWithParam = (req, res) => {
  res.send(`Param id : ${req.params.id}`);
  console.log("ID : " + req.params.id);
};
exports.putAllLogin = (req, res) => {
  res.send("Put login request");
};
exports.postAllLogin = (req, res) => {
  res.send("post login request");
};
exports.deleteAllLogin = (req, res) => {
  res.send("delete login request");
};
