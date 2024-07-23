const AbstractManager = require("./AbstractManager");

class ProductSousCatManager extends AbstractManager {
  constructor() {
    super({ table: "sous_product_category" });
  }

  async getAll() {
    const [result] = await this.database.query(`SELECT * FROM ${this.table}`);
    return [result];
  }

  async addSousCat(name, description, state) {
    const [result] = await this.database.query(
      `insert into ${this.table} (
    name,
    description,
    state
    )
    values (?, ?, ?)`,
      [name, description, state]
    );
    return [result].insertId;
  }

  async update(id, name, description, state) {
    console.info("id", id);
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, description = ?, state = ? WHERE id = ? 
    `,
      [name, description, state, id]
    );
    return rows;
  }

  async getById(id) {
    return this.database.query(
      `SELECT name, description, state FROM ${this.table} WHERE id=?`,
      [id]
    );
  }

  async delete(id) {
    const [rows] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = ProductSousCatManager;
