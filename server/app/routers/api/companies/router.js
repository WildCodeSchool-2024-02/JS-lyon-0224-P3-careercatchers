const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import company-related actions
const { browse } = require("../../../controllers/CompanyActions");

// Route to get a list of companies
router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
