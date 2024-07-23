const AbstractManager = require("./AbstractManager");

class CartManager extends AbstractManager {
  constructor() {
    super({ table: "cart" });
  }

  async getAllCart() {
    const [result] = await this.database.query(`SELECT *
  FROM ${this.table} ;`);
    return [result];
  }

  async readCartByUser(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where user_id = ?`,
      [id]
    );
    // return rows[0];
    return [rows];
  }

  async readSessionCartByUser(id) {
    const rows = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ? ORDER BY id DESC LIMIT 1`,
      [id]
    );
    // return rows[0];
    return rows[0];
  }

  // async addCart(id) {
  //   const [result] = await this.database.query(
  //     `INSERT INTO ${this.table}
  //     (user_id)
  //   VALUES (?)`,
  //     // eslint-disable-next-line camelcase
  //     [id]
  //   );
  //   return result;
  // }

  async addCart(id) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} 
      (user_id) 
    VALUES (?)`,
      // eslint-disable-next-line camelcase
      [id]
    );
    return result;
  }

  async deleteCart(id) {
    const [rows] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return rows;
  }
}
module.exports = CartManager;
