const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import company-related actions
const { browse, read, add } = require("../../../controllers/CompanyActions");
const verifyRole = require("../../../services/verifyRole");
const { verifyCookie } = require("../../../services/auth");

// Route to get a list of companies

router.post("/register", add);

/* **************************VerifyRole Wall******************************** */
router.use(verifyCookie);
router.use(verifyRole("company"));
/* **************************VerifyRole Wall******************************** */

router.get("/", browse); // not used for now

router.get("/company-profile", read);

router.get("/verifyRole", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
