const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import offer-related actions

// Route to get a list of offers
const { browse, add } = require("../../../controllers/UserAction");
// const { login } = require("../../../controllers/AuthAction");
const { hashPassword } = require("../../../services/auth");
// Route to get a list of offers
router.get("/", browse);

router.post("/register", hashPassword, add);
/* ************************************************************************* */

// router.post("/login", login);

// router.get("/:id", read);

module.exports = router;
