const tables = require("../tables");

const verifyAdmin = async (req, res, next) => {
  try {
    const id = req.payload;

    const [isAdmin] = await tables.user.checkAdmin(id);
    console.info("isADMIN", isAdmin);

    // eslint-disable-next-line no-unused-expressions
    isAdmin.isAdmin || !isAdmin.isAdmin ? next() : res.sendStatus(401);
  } catch (err) {
    res.send(err);
  }
};

module.exports = verifyAdmin;
