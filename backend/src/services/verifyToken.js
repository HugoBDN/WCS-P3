const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const headers = req.get("Authorization");

    const [type, token] = headers.split(" ");
    if (type === "Bearer") {
      const { payload } = jwt.verify(token, process.env.JWT_SECRET);

      req.payload = payload;
      next();
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = verifyToken;
