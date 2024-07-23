/* eslint-disable camelcase */
const fs = require("fs");
const tables = require("../tables");

const getAllProduct = async (req, res) => {
  try {
    const [products] = await tables.product.getAllProduct();
    res.status(200).json(products);
  } catch (err) {
    res.status(err);
  }
};

const read = async (req, res, next) => {
  try {
    const product = await tables.product.read(req.params.id);
    if (product == null) {
      res.sendStatus(404);
    } else {
      res.json(product);
    }
  } catch (err) {
    next(err);
  }
};

const readByCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.info("id", id);
    const [cat] = await tables.product.readByCategory(id);
    console.info("[cat]", cat);

    res.json(cat);
  } catch (error) {
    next(error);
  }
};

const readByCategoryAndSousCategory = async (req, res, next) => {
  try {
    const { productCategoryId, subProductCategoryId } = req.params;
    console.info(
      "product_category_id, sous_product_category_id",
      productCategoryId,
      subProductCategoryId
    );
    const [cat] = await tables.product.readByCategoryAndSousCategory({
      productCategoryId,
      subProductCategoryId,
    });
    console.info("[cat]", cat);
    res.json(cat);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res) => {
  // eslint-disable-next-line camelcase

  try {
    const { name, description, price, member_only, stock } = req.body;
    console.info("req :>>", req);
    const img_url = req.file.path;

    const [result] = await tables.product.addProduct(
      name,
      description,
      price,
      img_url,
      member_only,
      stock
    );
    if (result.affectedRows) {
      res.status(201).send("created");
    } else {
      fs.unlinkSync(req.file.path);
      res.status(401).send("erreur lors de l'enregistrement");
    }
  } catch (error) {
    fs.unlinkSync(req.file.path);

    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tables.product.updateProduct(id, req.body);
    if (result.affectedRows) {
      res
        .status(200)
        .json({ message: "votre compte a été mis à jour avec succès" });
    } else {
      res.status(401).send("problème");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tables.product.deleteProduct(id);
    if (result.affectedRows) {
      res.status(200).json({
        message: " La suppression du produit a été prise en compte",
      });
    } else {
      res.status(401).send("problème");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getNewProducts = async (req, res) => {
  try {
    const [result] = await tables.product.getNewProducts();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllProduct,
  read,
  readByCategory,
  add,
  update,
  deleteProduct,
  readByCategoryAndSousCategory,
  getNewProducts,
};
