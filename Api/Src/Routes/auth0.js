const express = require("express");
const router = express.Router();

const { signin, signup } = require("../Controllers/auth0");

router.post("/", signin);
router.post("/", signup);

module.exports = router;
