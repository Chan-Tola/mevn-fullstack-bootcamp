function auth(req, res, next) {
  console.log("This is middleware");
  next();
}
function auth2(req, res, next) {
  console.log("This is middleware 2");
  next();
}

//we have two way to export them output in this folder
module.exports = { auth, auth2 };
// exports.auth = auth;
