const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import offer-related actions
const {
  browse,
  browseOffersWithCompanies,
} = require("../../../controllers/OfferActions");

// Route to get a list of offers
router.get("/", browse);
router.get("/with-companies", browseOffersWithCompanies);

/* ************************************************************************* */

module.exports = router;
