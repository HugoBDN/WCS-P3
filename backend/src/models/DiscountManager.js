/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class DiscountManager extends AbstractManager {
  constructor() {
    super({ table: "discount" });
  }

  async getAllDiscount() {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return [result];
  }

  async addDiscount(name, description, disc_pourc, active, date_expiration) {
    const [result] = await this.database.query(
      `insert into ${this.table} (
            name,
      description,
      disc_pourc,
      active,
      date_expiration
        ) values (?, ?, ?, ?, ?)`,
      [name, description, disc_pourc, active, date_expiration]
    );
    return result;
  }

  readById(id) {
    return this.database.query(`select * from ${this.table} where id=?`, [id]);
  }

  deleteDiscount(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = DiscountManager;
