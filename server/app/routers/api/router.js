const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const offersRouter = require("./offers/router");

router.use("/offers", offersRouter);

const companiesRouter = require("./companies/router");

router.use("/companies", companiesRouter);
/* ************************************************************************* */

module.exports = router;
