const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import offer-related actions
const { browse, signupUser } = require("../../../controllers/UserAction");

// Route to get a list of offers
router.get("/", browse);

router.post("/signup", signupUser);
/* ************************************************************************* */

module.exports = router;
