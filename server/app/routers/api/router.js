const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const offersRouter = require("./offers/router");

router.use("/offers", offersRouter);

/* ************************************************************************* */

module.exports = router;
