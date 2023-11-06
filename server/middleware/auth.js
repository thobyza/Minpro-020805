const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    try {
      let token = req.headers.authorization;
      if (!token) {
        return res.status(400).send({ message: "Token is empty" });
      }
      token = token.split(" ")[1];

      let verifiedUser = jwt.verify(token, "MP0208");
      req.users = verifiedUser;
      next();
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
