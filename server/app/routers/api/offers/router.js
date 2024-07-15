const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import offer-related actions
const {
  browse,
  browseOffersWithCompanies,
  read,
  add,
  destroy,
  readByCompanyId,
} = require("../../../controllers/OfferActions");

// Route to get a list of offers
router.get("/", browse);
router.get("/with-companies", browseOffersWithCompanies);
router.get("/:id", read);
router.post("/", add);
router.delete("/delete", destroy);
router.post("/by-company", readByCompanyId);
/* ************************************************************************* */

module.exports = router;
