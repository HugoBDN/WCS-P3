/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class WishlistManager extends AbstractManager {
  constructor() {
    super({ table: "wishlist" });
  }

  async getAllProductsInWishlist() {
    const [result] = await this.database.query(`SELECT *
  FROM ${this.table};`);
    return [result];
  }

  async readProductByUser(id) {
    const [rows] = await this.database.query(
      `select wishlist.*, product.id AS id_product, 
     product.name ,
  product.description,
  product.price,
  product.member_only,
  product.stock,
  product.product_category_id,
  product.sous_product_category_id,
  product.discount_id from ${this.table} JOIN product ON wishlist.product_id = product.id where user_id = ?`,
      [id]
    );
    // return rows[0];
    return [rows];
  }

  async addProductInWishlist(pointure, size, quantity, product_id, id) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (
      pointure,
      size,
      quantity,
      product_id,
      user_id)
    VALUES (?, ?, ?, ?, ?)`,
      // eslint-disable-next-line camelcase
      [pointure, size, quantity, product_id, id]
    );
    return result;
  }

  async deleteProductInWishlist(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = WishlistManager;
