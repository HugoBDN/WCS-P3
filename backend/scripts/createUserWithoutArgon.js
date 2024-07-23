require("dotenv").config();
// const mysql = require("mysql2");
const database = require("../database/client");

async function createUser() {
  const generateRandomString = () =>
    Math.random().toString(36).substring(2, 15);
  const generateRandomPhone = () =>
    Math.floor(Math.random() * 1000000000).toString();

  const user = {
    firstname: generateRandomString(),
    lastname: generateRandomString(),
    birthday: "1990-01-01",
    email: `${generateRandomString()}@example.com`,
    hashedPassword: "1234",
    phone_mobile: generateRandomPhone(),
    phone_fix: generateRandomPhone(),
    isMember: false,
    isAdmin: false,
  };

  try {
    const [result] = await database.execute(
      "INSERT INTO user (firstname, lastname, birthday, email, hashedPassword, phone_mobile, phone_fix, isMember, isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.birthday,
        user.email,
        user.hashedPassword,
        user.phone_mobile,
        user.phone_fix,
        user.isMember,
        user.isAdmin,
      ]
    );

    console.info(`Utilisateur créé avec l'ID: ${result.insertId}`);
  } catch (err) {
    console.error("Erreur lors de la création de l'utilisateur :", err.message);
  } finally {
    await database.end();
  }
}

createUser();
