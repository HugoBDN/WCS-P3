/* eslint-disable camelcase */
// const jwt = require("jsonwebtoken");
const tables = require("../tables");

const getAllProductCat = async (req, res, next) => {
  try {
    const [productCat] = await tables.product_category.getAll();

    res.json(productCat);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.info("id", id);
    const { name, description, state } = req.body;
    console.info("req.body", req.body);
    const result = await tables.product_category.updateProductCat(
      id,
      name,
      description,
      state
    );
    res.status(200).json(result);
    // if (result.affectedRows) {
    // } else {
    //   res.status(401).send("problème");
    // }
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [cat] = await tables.product_category.getCatById(id);
    res.json(cat);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const { name, description, state } = req.body;
  try {
    const insertId = await tables.product_category.addProductCat(
      name,
      description,
      state
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const deleteProductCat = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await tables.product_category.deleteProductCat(id);
    if (result.affectedRows) {
      res.status(200).json({
        message:
          " la suppression de la catégorie du produit a été prise en compte",
      });
    } else {
      res.status(401).send("problème");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { getAllProductCat, update, read, add, deleteProductCat };
