const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const offersRouter = require("./offers/router");

router.use("/offers", offersRouter);

const companiesRouter = require("./companies/router");

router.use("/companies", companiesRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);
/* ************************************************************************* */

module.exports = router;
