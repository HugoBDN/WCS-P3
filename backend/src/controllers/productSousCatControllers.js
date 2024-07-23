const tables = require("../tables");

const getAllProductSousCat = async (req, res, next) => {
  try {
    const [productSousCat] = await tables.sous_product_category.getAll();

    res.json(productSousCat);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { name, description, state } = req.body;

    const result = await tables.sous_product_category.update(
      id,
      name,
      description,
      state
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [productSousCat] = await tables.sous_product_category.getById(id);
    res.json(productSousCat);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const { name, description, state } = req.body;
  try {
    const insertId = await tables.sous_product_category.addSousCat(
      name,
      description,
      state
    );
    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const deleteSousCat = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await tables.sous_product_category.delete(id);
    if (result.affectedRows) {
      res.status(200).json({
        message:
          " la suppression de la sous-catégorie du produit a été prise en compte",
      });
    } else {
      res.status(401).send("problème");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { deleteSousCat, add, read, update, getAllProductSousCat };
