/* eslint-disable no-undef */
/* eslint-disable camelcase */
const tables = require("../tables");

const getAllAddress = async (req, res) => {
  try {
    const [addresses] = await tables.address.getAllAddress();
    res.json(addresses);
  } catch (err) {
    res.status(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const { address_line1_user, address_line2, postal_code, city, country } =
    req.body;
  const user_id = req.payload;
  try {
    const editAddress = await tables.address.updateAddress(
      address_line1_user,
      address_line2,
      postal_code,
      city,
      country,
      user_id,
      id
    );
    res.status(201).json(editAddress);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res) => {
  const { address_line1_user, address_line2, postal_code, city, country } =
    req.body;
  const id = req.payload;
  try {
    const insertId = await tables.address.addAddress(
      address_line1_user,
      address_line2,
      postal_code,
      city,
      country,
      id
    );
    res.status(201).json({ insertId });
  } catch (err) {
    console.info(`${err} vérifiez les champs`);
  }
};

module.exports = {
  getAllAddress,
  edit,
  add,
};
