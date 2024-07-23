/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class CommandManager extends AbstractManager {
  constructor() {
    super({ table: "command" });
  }

  async getAllCommands() {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return [result];
  }

  async getAllCommandByUser(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where user_id = ?`,
      [id]
    );
    return [rows];
  }

  async read(id, userId) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ? and user_id = ?`,
      [id, userId]
    );
    return rows[0];
  }

  async add(payment, statut, user_id, parcel_id, cart_id, expedition_id) {
    const [result] = await this.database.query(
      `insert into ${this.table} (
            payment, statut, user_id, parcel_id, cart_id, expedition_id)
    values (?, ?, ?, ?, ?, ?)`,
      // eslint-disable-next-line camelcase
      [payment, statut, user_id, parcel_id, cart_id, expedition_id]
    );
    return result;
  }
}

module.exports = CommandManager;
