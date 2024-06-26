const express = require("express");

const router = express.Router();

const {browse } = require("../../controllers/programActions");

  
  router.get("/programs", browse);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

/* ************************************************************************* */

module.exports = router;
