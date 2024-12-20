const user = (req, res, next) => {
  console.log("Accessed the middleware");
  next();
};

module.exports = { user };
