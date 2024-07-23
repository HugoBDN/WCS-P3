const AbstractManager = require("./AbstractManager");

class ParcelManager extends AbstractManager {
  constructor() {
    super({ table: "parcel" });
  }

  async getAllParcel() {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return [result];
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = ParcelManager;
