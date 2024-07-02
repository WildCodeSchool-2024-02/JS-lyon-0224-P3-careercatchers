const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import company-related actions
const { browse, add } = require("../../../controllers/CompanyActions");

// Route to get a list of companies
router.get("/", browse);

router.post("/", add);

/* ************************************************************************* */

module.exports = router;
