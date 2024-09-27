// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all companies from the database
    const companies = await tables.company.readAll();

    // Respond with the companies in JSON format
    res.json(companies);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const company = req.body;

    // Créer une nouvelle entreprise
    const insertId = await tables.company.create(company);

    res.status(201).json(insertId); // Répondre avec l'id de l'entreprise créé
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  add,
};
