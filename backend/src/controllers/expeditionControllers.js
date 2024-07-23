/* eslint-disable camelcase */
const tables = require("../tables");

const getAllExpedition = async (req, res) => {
  try {
    const [expeditions] = await tables.expedition.getAllExpedition();
    res.json(expeditions);
  } catch (err) {
    res.status(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  // eslint-disable-next-line camelcase
  const { address, postal_code, city, country } = req.body;
  try {
    const editExpedition = await tables.expedition.updateExpedition(
      address,
      postal_code,
      city,
      country,
      id
    );
    res.status(201).json(editExpedition);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { address, postal_code, city, country } = req.body;
  try {
    const insertId = await tables.expedition.addExpedition(
      address,
      postal_code,
      city,
      country
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const addWithUserId = async (req, res, next) => {
  const id = req.payload;
  const { address, postal_code, city, country } = req.body;
  console.info("req.payload", req.payload);
  try {
    const insertId = await tables.expedition.addExpeditionWithUserId(
      address,
      postal_code,
      city,
      country,
      id
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const deleteExpedition = async (req, res) => {
  try {
    const tokenId = req.payload;
    const { id } = req.params;
    console.info("req.params", req.params);
    console.info("id", id);
    const [result] = await tables.expedition.deleteExpedition(id, tokenId);
    console.info("result", result);
    if (result.affectedRows) {
      res.status(200).json({
        message:
          " La suppression de l'adresse de livraison a été prise en compte",
      });
    } else {
      res.status(401).send("problème");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllExpedition,
  edit,
  add,
  addWithUserId,
  deleteExpedition,
};
