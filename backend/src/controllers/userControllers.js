/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// Import access to database tables
// eslint-disable-next-line import/no-unresolved
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
// eslint-disable-next-line import/no-extraneous-dependencies
const { sendWelcomeEmail } = require("../nodemailer/transporter");
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const getAllUser = async (req, res) => {
  try {
    // Fetch all users from the database
    const [users] = await tables.user.getAllUser();
    console.info("users ", users);

    // Respond with the items in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    res.status(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    birthday,
    email,
    hashedPassword,
    phone_mobile,
    phone_fix,
  } = req.body;
  try {
    const editUser = await tables.user.updateUser(
      firstname,
      lastname,
      birthday,
      email,
      hashedPassword,
      phone_mobile,
      phone_fix,
      id
    );
    res.status(201).json(editUser);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res) => {
  try {
    const id = req.payload;
    const [result] = await tables.user.updateUserWithOutPassword(id, req.body);
    if (result.affectedRows) {
      res
        .status(200)
        .json({ message: "votre compte a été mis à jour avec succès" });
    } else {
      res.status(401).send("problème");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePassword = async (req, res) => {
  try {
    const { hashedPassword } = req.body;
    const id = req.payload;
    const [result] = await tables.user.updateUserOnlyPassword(
      id,
      hashedPassword
    );
    if (result.affectedRows) {
      res.status(200).json({ message: "votre demande à été pris en compte" });
    } else {
      res.status(401).send("probleme");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extraire les données utilisateur du corps de la requête
  const {
    firstname,
    lastname,
    birthday,
    email,
    hashedPassword,
    phone_mobile,
    phone_fix,
  } = req.body;
  try {
    // Vérifier si l'email existe déjà dans la base de données
    const [existingUser] = await tables.user.getUserByEmail(email);
    if (existingUser.length > 0) {
      // Si un utilisateur avec cet email existe déjà, renvoyer une erreur
      return res.status(400).json({ message: "Cet email est déjà utilisé." });
    }

    // Insérer l'utilisateur dans la base de données
    const insertId = await tables.user.addUser(
      firstname,
      lastname,
      birthday,
      email,
      hashedPassword,
      phone_mobile,
      phone_fix
    );

    // Envoyer l'e-mail de bienvenue
    await sendWelcomeEmail(email);

    // Répondre avec HTTP 201 (Créé) et l'ID du nouvel utilisateur inséré
    return res.status(201).json({ insertId });
  } catch (err) {
    // Passer les erreurs au middleware de gestion des erreurs
    return next(err);
  }
};
const readByEmail = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.info("req.body", req.body);
    if (!email || !password) {
      res.status(401).json({ message: "remplissez vos champs !" });
    } else {
      const [user] = await tables.user.getUserByEmail(email);
      console.info(" user :>> ", user);
      if (user.length) {
        console.info("user.length", user.length);
        const isVerify = await argon2.verify(user[0].hashedPassword, password);
        console.info("isVerify", isVerify);
        if (typeof isVerify === "boolean" && isVerify) {
          const token = jwt.sign(
            { payload: user[0].id },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
          console.info("user[0].id", token);
          res.status(200).json(token);
        } else {
          res.status(401).send("verifiez vos données");
        }
      } else {
        res.status(401).send("adresse mail n'existe pas");
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const readById = async (req, res) => {
  try {
    const id = req.payload;
    console.info("id :>> ", id);
    const [user] = await tables.user.getUserById(id);
    console.info("user :>>  ", user);
    if (user.length) {
      res.status(200).json({ isLogged: true, data: user[0] });
    } else {
      // eslint-disable-next-line no-undef
      res.status(401).json({ isLogged: false, message: err });
    }
  } catch (err) {
    res.status(500).json({ isLogged: false, message: err });
  }
};

const logout = async (req, res) => {
  try {
    const id = req.payload;
    const token = jwt.sign({ payload: id }, process.env.JWT_SECRET, {
      expiresIn: "0h",
    });

    res.status(200).json(token);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.info("id", id);
    const [result] = await tables.user.deleteUser(id);
    if (result.affectedRows) {
      res.status(200).json({
        message: " La suppression du compte a été prise en compte",
      });
    } else {
      res.status(401).send("problème");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  getAllUser,
  readByEmail,
  read,
  add,
  edit,
  readById,
  logout,
  update,
  updatePassword,
  deleteUser,
};
