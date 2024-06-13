// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const offers = await tables.offer.readAll();

    // Respond with the items in JSON format
    res.json(offers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseOffersWithCompanies = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const offers = await tables.offer.getOffersWithCompanies();

    // Respond with the items in JSON format
    res.json(offers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  browseOffersWithCompanies,
};
