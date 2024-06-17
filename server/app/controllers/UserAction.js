// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const users = await tables.user.readAll();

    // Respond with the offers in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const signupUser = async (req, res, next) => {
  try {
    const user = req.body;
    console.info(user);
    // Créer un nouvel utilisateur
    const insertId = await tables.user.create(user);

    res.status(201).json(insertId); // Répondre avec l'utilisateur créé
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  signupUser,
};
