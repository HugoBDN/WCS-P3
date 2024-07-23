const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  const hashedOption = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };
  try {
    const { password } = req.body;
    if (!password) {
      res.status(401).send("probleme");
    } else {
      const hashedPassword = await argon2.hash(
        password,
        process.env.SALT_ARGON,
        hashedOption
      );
      delete req.body.password;
      req.body.hashedPassword = hashedPassword;
      next();
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { hashPassword };
