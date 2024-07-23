/* eslint-disable camelcase */
const tables = require("../tables");

const getAllDiscount = async (req, res) => {
  try {
    const [discount] = await tables.discount.getAllDiscount();
    res.json(discount);
  } catch (err) {
    res.status(err);
  }
};

const add = async (req, res, next) => {
  const { name, description, disc_pourc, active, date_expiration } = req.body;
  try {
    const insertId = await tables.discount.addDiscount(
      name,
      description,
      disc_pourc,
      active,
      date_expiration
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [discount] = await tables.discount.readById(id);

    if (discount == null) {
      res.sendStatus(404);
    } else {
      res.json(discount);
    }
  } catch (err) {
    next(err);
  }
};

const deleteDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tables.discount.deleteDiscount(id);
    if (result.affectedRows) {
      res.status(200).json({
        message: " La suppression de la promotion a été prise en compte",
      });
    } else {
      res.status(401).send("problème");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllDiscount,
  add,
  read,
  deleteDiscount,
};
