const jwt = require("jsonwebtoken");
const key = process.env.JWT_SECRET_KEY;

const verifyToken = (req, res, next) => {
  if (req.headers.hasOwnProperty("authorization")) {
    let token = req.headers.authorization;
    next();
  } else {
    res.status(210).send("No authorization.You must login.");
  }
};

module.exports = verifyToken;
