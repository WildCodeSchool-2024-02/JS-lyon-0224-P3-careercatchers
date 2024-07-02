const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import offer-related actions
const { browse, add } = require("../../../controllers/CandidateActions");

// Route to get a list of offers
router.get("/", browse);

router.post("/register", add);
/* ************************************************************************* */

module.exports = router;
