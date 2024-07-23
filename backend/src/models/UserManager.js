/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation
  async getAllUser() {
    const [result] = await this.database
      .query(`SELECT user.*, address.id AS address_id
  FROM user
  LEFT JOIN address ON address.user_id = user.id;`);
    return [result];
  }

  async addUser(
    firstname,
    lastname,
    birthday,
    email,
    hashedPassword,
    phone_mobile,
    phone_fix
  ) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} ( 
        firstname,
        lastname,
        birthday,
        email,
        hashedPassword,
        phone_mobile,
        phone_fix) 
        values (?, ?, ?, ?, ?, ?, ?)`,
      [
        firstname,
        lastname,
        birthday,
        email,
        hashedPassword,
        phone_mobile,
        phone_fix,
      ]
    );
    return result;
  }

  updateUserWithOutPassword(id, userWithoutpassword) {
    const columns = Object.keys(userWithoutpassword);
    const valuesColumns = Object.values(userWithoutpassword);
    const values = columns.map((column) => `${column} = ?`).join(", ");

    return this.database.query(
      `UPDATE ${this.table} set ${values} where id=?`,
      [...valuesColumns, id]
    );
  }

  updateUserOnlyPassword(id, hashedPassword) {
    return this.database.query(
      `UPDATE ${this.table} set hashedPassword = ? where id=?`,
      [hashedPassword, id]
    );
  }

  // Return the ID of the newly inserted user

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return [rows];
  }

  // The U of CRUD - Update operation
  async updateUser(
    firstname,
    lastname,
    birthday,
    email,
    hashedPassword,
    phone_mobile,
    phone_fix,
    id
  ) {
    const [rows] = await this.database.query(
      `update ${this.table} set 
       firstname = ?,
       lastname = ?,
       birthday = ?,
       email = ?,
       hashedPassword = ?,
       phone_mobile = ?,
       phone_fix = ? 
       where id = ? `,
      [
        firstname,
        lastname,
        birthday,
        email,
        hashedPassword,
        phone_mobile,
        phone_fix,
        id,
      ]
    );
    return rows;
  }

  async getUserByEmail(email) {
    return this.database.query(`select * from ${this.table} where email = ? `, [
      email,
    ]);
  }

  getUserById(id) {
    return this.database.query(
      `select firstname, lastname, birthday, email, phone_mobile, phone_fix from ${this.table} where id=?`,
      [id]
    );
  }
  // TODO: Implement the update operation to modify an existing user

  // The D of CRUD - Delete operation
  deleteUser(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  async checkAdmin(id) {
    const result = await this.database.query(
      `select isAdmin from ${this.table} where id = ? `,
      [id]
    );
    console.info("result dans checkAdmin", result);
    return result;
  }

  // TODO: Implement the delete operation to remove an user by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserManager;
