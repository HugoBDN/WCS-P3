/* eslint-disable no-undef */
/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class AddressManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "address" });
  }

  async getAllAddress() {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return [result];
  }

  async updateAddress(
    address_line1_user,
    address_line2,
    postal_code,
    city,
    country,
    user_id,
    id
  ) {
    const [rows] = await this.database.query(
      `update ${this.table} set
        address_line1_user = ?,
      address_line2 = ?,
      postal_code = ?,
      city = ?,
      country = ?,
      user_id = ?
      where id = ?`,
      [
        address_line1_user,
        address_line2,
        postal_code,
        city,
        country,
        user_id,
        id,
      ]
    );
    return rows;
  }

  async addAddress(
    address_line1_user,
    address_line2,
    postal_code,
    city,
    country,
    id
  ) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (
      address_line1_user,
      address_line2,
      postal_code,
      city,
      country,
      user_id
    ) VALUES (?, ?, ?, ?, ?, ?)`,
      [address_line1_user, address_line2, postal_code, city, country, id]
    );

    return result;
  }
}

module.exports = AddressManager;
