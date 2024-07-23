const AbstractManager = require("./AbstractManager");

class ExpeditionManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "expedition" });
  }

  async getAllExpedition() {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return [result];
  }

  // eslint-disable-next-line camelcase
  async updateExpedition(address, postal_code, city, country, id) {
    const [rows] = await this.database.query(
      `update ${this.table} set
        address = ?,
       postal_code = ?,
    city = ?, 
    country = ? 
     where id = ?`,
      // eslint-disable-next-line camelcase
      [address, postal_code, city, country, id]
    );
    return rows;
  }

  // eslint-disable-next-line camelcase
  async addExpedition(address, postal_code, city, country) {
    const [result] = await this.database.query(
      `insert into ${this.table} (
            address,
    postal_code,
    city,
    country
    )
    values (?, ?, ?, ?)`,
      // eslint-disable-next-line camelcase
      [address, postal_code, city, country]
    );
    return [result].insertId;
  }

  // eslint-disable-next-line camelcase
  async addExpeditionWithUserId(address, postal_code, city, country, id) {
    const [result] = await this.database.query(
      `insert into ${this.table} (
            address,
    postal_code,
    city,
    country,
    user_id
    )
    values (?, ?, ?, ?, ?)`,
      // eslint-disable-next-line camelcase
      [address, postal_code, city, country, id]
    );
    return [result].insertId;
  }

  deleteExpedition(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = ExpeditionManager;
