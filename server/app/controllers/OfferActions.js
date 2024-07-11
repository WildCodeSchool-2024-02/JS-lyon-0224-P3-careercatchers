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
    const offer = req.body.offerForm;
    const insertId = await tables.offer.create(offer);
    res.status(201).json(insertId);
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  // Extract the item id from the request body
  const { id } = req.body;
  try {
    // Delete the news from the database
    const deletedOffer = await tables.offer.delete(id);

    // Respond with HTTP 200 (OK) and the response data
    res.status(200).json({ deletedOffer });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  browseOffersWithCompanies,
  read,
  add,
  destroy,
};
