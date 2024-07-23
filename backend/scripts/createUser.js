require("dotenv").config();

const argon2 = require("argon2");
const database = require("../database/client");

const hashedOption = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

async function createUser(password) {
  const generateHashPassword = await argon2.hash(
    password,
    process.env.SALT_ARGON,
    hashedOption
  );
  const generateRandomString = () =>
    Math.random().toString(36).substring(2, 15);
  const generateRandomPhone = () =>
    Math.floor(Math.random() * 1000000000).toString();

  const user = {
    firstname: generateRandomString(),
    lastname: generateRandomString(),
    birthday: "1990-01-01",
    email: `${generateRandomString()}@example.com`,
    hashedPassword: generateHashPassword,
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

createUser("1234");
