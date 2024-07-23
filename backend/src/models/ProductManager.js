/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  async getAllProduct() {
    const [result] = await this.database.query(`
    SELECT 
      product.*,
      discount.name AS dn,
      discount.description AS ddsc,
      discount.disc_pourc AS dprc,
      discount.active AS dact,
      product_category.name AS pcn,
      product_category.description AS pcdsc,
      product_category.state AS pcstt,
      sous_product_category.name AS spcn,
      sous_product_category.description AS spcdsc,
      sous_product_category.state AS spcstt
    FROM ${this.table}
    LEFT JOIN discount ON ${this.table}.discount_id = discount.id
    LEFT JOIN product_category ON ${this.table}.product_category_id = product_category.id
    LEFT JOIN sous_product_category ON ${this.table}.sous_product_category_id = sous_product_category.id
  `);
    return [result];
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT 
      product.*,
      discount.name as d_name,
      discount.description as d_desc,
      discount.disc_pourc as d_pourcentage,
      discount.active as d_active,
      product_category.name as pc_name,
      product_category.description as pc_desc,
      product_category.state as pc_state,
      sous_product_category.name as spc_name,
      sous_product_category.description as spc_desc,
      sous_product_category.state as spc_state
    FROM ${this.table}
    LEFT JOIN discount ON ${this.table}.discount_id = discount.id
    LEFT JOIN product_category ON ${this.table}.product_category_id = product_category.id
    LEFT JOIN sous_product_category ON ${this.table}.sous_product_category_id = sous_product_category.id
    WHERE ${this.table}.id = ?`,
      [id]
    );
    return rows[0];
  }

  async readByCategory(id) {
    const rows = await this.database.query(
      `SELECT product.*, 
      discount.name as dn,
      discount.description as ddsc,
      discount.disc_pourc as dprc,
      discount.active as dact,
      product_category.name as pc_name,
      product_category.description as pc_dsc,
      product_category.state as pc_state,
      sous_product_category.name as spc_name,
      sous_product_category.description as spc_dsc,
      sous_product_category.state as spc_state
    FROM product
    LEFT JOIN discount ON product.discount_id = discount.id
    LEFT JOIN product_category ON product.product_category_id = product_category.id
    LEFT JOIN sous_product_category ON product.sous_product_category_id = sous_product_category.id
    WHERE product.product_category_id = ?`,
      [id]
    );
    return rows;
  }

  async readByCategoryAndSousCategory({
    productCategoryId,
    subProductCategoryId,
  }) {
    const rows = await this.database.query(
      `SELECT product.*, 
      discount.name as d_name,
      discount.description as d_desc,
      discount.disc_pourc as d_pourcentage,
      discount.active as d_act,
      product_category.name as pc_name,
      product_category.description as pc_desc,
      product_category.state as pc_state,
      sous_product_category.name as spc_name,
      sous_product_category.description as spc_desc,
      sous_product_category.state as spc_state
    FROM ${this.table}
    LEFT JOIN discount ON ${this.table}.discount_id = discount.id
    LEFT JOIN product_category ON ${this.table}.product_category_id = product_category.id
    LEFT JOIN sous_product_category ON ${this.table}.sous_product_category_id = sous_product_category.id
    WHERE ${this.table}.product_category_id = ? AND ${this.table}.sous_product_category_id = ?`,
      [productCategoryId, subProductCategoryId]
    );
    return rows;
  }

  // eslint-disable-next-line camelcase
  addProduct(name, description, price, img_url, member_only, stock) {
    return this.database.query(
      `INSERT INTO ${this.table} (
        name,
        description,
        price,
        img_url,
        member_only,
        stock
    ) values (?,?,?,?,?,?)`,
      [name, description, price, img_url, member_only, stock]
    );
  }

  /* async updateProduct(name, description, price, member_only, stock, id) {
    const rows = await this.database.query(
      `update ${this.table} set
        name = ?,
    description = ?,
    price = ?,
    member_only = ?,
    stock = ?
    where id = ? `,
      [name, description, price, member_only, stock, id]
    );
    return rows;
  } */

  updateProduct(id, prod) {
    const columns = Object.keys(prod);
    const valuesColumns = Object.values(prod);
    const values = columns.map((column) => `${column} = ?`).join(", ");

    return this.database.query(
      `UPDATE ${this.table} set ${values} where id=?`,
      [...valuesColumns, id]
    );
  }

  deleteProduct(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  async getNewProducts() {
    const [result] = await this.database.query(`
      SELECT product.*, 
      discount.name as d_name,
      discount.description as d_desc,
      discount.disc_pourc as d_pourcentage,
      discount.active as d_act,
      product_category.name as pc_name,
      product_category.description as pc_desc,
      product_category.state as pc_state,
      sous_product_category.name as spc_name,
      sous_product_category.description as spc_desc,
      sous_product_category.state as spc_state
      FROM ${this.table}
      LEFT JOIN discount ON ${this.table}.discount_id = discount.id
      LEFT JOIN product_category ON ${this.table}.product_category_id = product_category.id
      LEFT JOIN sous_product_category ON ${this.table}.sous_product_category_id = sous_product_category.id
      ORDER BY product.created_at DESC
      LIMIT 5;`);
    return [result];
  }
}
module.exports = ProductManager;
