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
} = require("../../../controllers/OfferActions");

const verifyRole = require("../../../services/verifyRole");

// Route to get a list of offers
router.get("/", browse);
router.get("/with-companies", browseOffersWithCompanies);
router.get("/:id", read);

router.use(verifyRole("company"));

router.post("/", add);
router.delete("/delete", destroy);
/* ************************************************************************* */

module.exports = router;
