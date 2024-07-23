/* eslint-disable camelcase */
const tables = require("../tables");

const getAllCommands = async (req, res) => {
  try {
    const [commands] = await tables.command.getAllCommands();
    res.status(200).json(commands);
  } catch (err) {
    res.status(err);
  }
};

const getCommandByUser = async (req, res) => {
  try {
    const id = req.payload;
    const [commandsByUser] = await tables.command.getAllCommandByUser(id);
    res.status(200).json(commandsByUser);
  } catch (err) {
    res.status(err);
  }
};

const read = async (req, res, next) => {
  try {
    const userId = req.payload;
    const { id } = req.params;
    const command = await tables.command.read(id, userId);
    if (command == null) {
      res.sendStatus(404);
    } else {
      res.json(command);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const id = req.payload;
    const user_id = id;
    const { payment, statut, parcel_id, cart_id, expedition_id } = req.body;
    const command = await tables.command.add(
      payment,
      statut,
      user_id,
      parcel_id,
      cart_id,
      expedition_id
    );
    if (command == null) {
      res.sendStatus(404);
    } else {
      res.json(command);
    }
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getAllCommands,
  getCommandByUser,
  read,
  add,
};
