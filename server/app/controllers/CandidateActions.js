// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const candidates = await tables.candidate.readAll();

    // Respond with the offers in JSON format
    res.json(candidates);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const candidate = req.body;

    // Créer un nouveau candidat
    const insertId = await tables.candidate.create(candidate);

    res.status(201).json(insertId); // Répondre avec l'id du candidat créé
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  add,
};
