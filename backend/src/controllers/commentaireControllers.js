const tables = require("../tables");

const getAllCommentaire = async (req, res) => {
  try {
    const [allcommentaire] = await tables.commentaire.getAllCommentaire();
    res.json(allcommentaire);
  } catch (err) {
    res.status(err);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [result] = await tables.commentaire.readCommentaireById(id);
    if (result == null) {
      res.sendStatus(404);
    } else {
      res.json(result);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const { firstname, commentaire, note } = req.body;
  try {
    const insertId = await tables.commentaire.addCommentaire(
      firstname,
      commentaire,
      note
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllCommentaire, read, add };
