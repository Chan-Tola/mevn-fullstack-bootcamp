const CheckRequest = (req, res, next) => {
  console.log("Check Request have be done");
  next();
};
module.exports = CheckRequest;
