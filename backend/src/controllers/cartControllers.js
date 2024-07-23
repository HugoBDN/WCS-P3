const tables = require("../tables");

const getAllCart = async (req, res) => {
  try {
    const [cart] = await tables.cart.getAllCart();
    console.info("cart ", cart);

    res.json(cart);
  } catch (err) {
    res.status(err);
  }
};

const read = async (req, res, next) => {
  try {
    const id = req.payload;
    const [result] = await tables.cart.readCartByUser(id);
    console.info("result", result);
    if (result == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
};

const sessionCart = async (req, res, next) => {
  try {
    const id = req.payload;
    const [result] = await tables.cart.readSessionCartByUser(id);
    console.info("result", result);
    if (result == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const id = req.payload;
  console.info("req.payload", req.payload);
  try {
    const cart = await tables.cart.addCart(id);
    console.info("cart", cart);
    res.status(201).json({ cart });
  } catch (err) {
    next(err);
  }
};

const addCart = async (req, res, next) => {
  const id = req.body.userId;
  console.info("req.body", id);
  try {
    const cart = await tables.cart.addCart(id);
    console.info("cart", cart);
    res.status(201).json({ cart });
  } catch (err) {
    next(err);
  }
};

const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await tables.cart.deleteCart(id);
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
module.exports = { getAllCart, read, sessionCart, add, addCart, deleteCart };
