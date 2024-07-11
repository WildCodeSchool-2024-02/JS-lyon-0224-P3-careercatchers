const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import offer-related actions
const { browse, read, add } = require("../../../controllers/CandidateActions");
const verifyRole = require("../../../services/verifyRole");
const { verifyCookie } = require("../../../services/auth");

// Route to get a list of offers

router.post("/register", add);

/* **************************Verify Wall******************************** */
router.use(verifyCookie);
router.use(verifyRole("candidate"));
/* **************************Verify Wall******************************** */

router.get("/", browse); // not used for now

router.get("/candidate-profile", read);

router.get("/verifyRole", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
