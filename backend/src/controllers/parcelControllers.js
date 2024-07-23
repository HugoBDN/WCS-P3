const tables = require("../tables");

const getAllParcel = async (req, res) => {
  try {
    const [parcels] = await tables.parcel.getAllParcel();
    res.status(200).json(parcels);
  } catch (err) {
    res.status(err);
  }
};

const read = async (req, res, next) => {
  try {
    const parcel = await tables.parcel.read(req.params.id);
    if (parcel == null) {
      res.sendStatus(404);
    } else {
      res.json(parcel);
    }
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getAllParcel,
  read,
};
