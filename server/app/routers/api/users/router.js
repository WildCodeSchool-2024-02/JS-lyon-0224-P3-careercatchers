const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import offer-related actions

// Route to get a list of offers
const { add, destroyUser } = require("../../../controllers/UserAction");
const {
  login,
  logout,
} = require("../../../controllers/AuthentificationActions");
const { hashPassword } = require("../../../services/auth");

router.post("/login", login);
router.get("/logout", logout);
router.post("/register", hashPassword, add);
router.delete("/delete-user", destroyUser);
/* ***********************Route Protégé ************************************************** */

module.exports = router;
