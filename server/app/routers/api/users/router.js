const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import offer-related actions

// Route to get a list of offers
const {
  add,
  getProfile,
  destroyUser,
} = require("../../../controllers/UserAction");
const {
  login,
  logout,
} = require("../../../controllers/AuthentificationActions");
const { hashPassword, verifyCookie } = require("../../../services/auth");
// const verifyCookie = require("../../../services/verifyCookie");
// Route to get a list of offers
router.post("/login", login);
router.get("/logout", logout);
router.post("/register", hashPassword, add);

router.delete("/delete-user", verifyCookie, destroyUser);
/* ***********************Route Protégé ************************************************** */

router.get("/profil-connected", verifyCookie, getProfile);

// router.use(verifyToken);

module.exports = router;
