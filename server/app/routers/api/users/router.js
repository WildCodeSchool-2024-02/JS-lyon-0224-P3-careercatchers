const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import offer-related actions

// Route to get a list of offers
const { add, getProfile } = require("../../../controllers/UserAction");
const {
  login,
  logout,
} = require("../../../controllers/AuthentificationActions");
const { hashPassword, verifyCookie } = require("../../../services/auth");
// const verifyCookie = require("../../../services/verifyCookie");
// Route to get a list of offers
router.post("/login", login);
router.get("/logout", logout);
// router.get("/:id", validatecookie, read);

router.post("/", hashPassword, add);

// router.get("/profile", verifyCookie, getProfile);

router.get("/is-connected", verifyCookie, getProfile);
/* ************************************************************************* */

// router.use(verifyToken);
// router.get("/:id", verifyToken, read);

// router.get("/:id", read);

module.exports = router;
