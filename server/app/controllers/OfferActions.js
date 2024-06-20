// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const offers = await tables.offer.readAll();

    // Respond with the offers in JSON format
    res.json(offers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseOffersWithCompanies = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const offers = await tables.offer.getOffersWithCompanies();

    // Respond with the offers in JSON format
    res.json(offers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const offer = await tables.offer.read(req.params.id);

    res.json(offer);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const offer = req.body;
    const insertId = await tables.offer.create(offer);
    res.status(201).json(insertId);
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  browseOffersWithCompanies,
  read,
  add,
};
