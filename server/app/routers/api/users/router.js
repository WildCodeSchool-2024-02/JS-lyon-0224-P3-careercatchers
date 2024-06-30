const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import offer-related actions

// Route to get a list of offers
const { add, read } = require("../../../controllers/UserAction");
const { login } = require("../../../controllers/AuthentificationActions");
const { hashPassword, verifyToken } = require("../../../services/auth");
// Route to get a list of offers
router.post("/login", login);

router.post("/", hashPassword, add);
/* ************************************************************************* */

// router.use(verifyToken);
router.get("/:id", verifyToken, read);

// router.get("/:id", read);

module.exports = router;
