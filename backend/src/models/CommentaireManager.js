const AbstractManager = require("./AbstractManager");

class CommentaireManager extends AbstractManager {
  constructor() {
    super({ table: "commentaire" });
  }

  async getAllCommentaire() {
    const [result] = await this.database.query(`SELECT * FROM ${this.table};`);
    return [result];
  }

  async readCommentaireById(id) {
    const [rows] = await this.database.query(
      `select commentaire.*, product.name as p from ${this.table} join product on commentaire.product_id = product.id `,
      [id]
    );
    return rows;
  }

  async addCommentaire(firstname, commentaire, note) {
    const [result] = await this.database.query(
      `insert into ${this.table} (
            firstname,
            commentaire,
            note )
    values (?, ?, ?)`,
      [firstname, commentaire, note]
    );
    return [result].insertId;
  }
}

module.exports = CommentaireManager;
