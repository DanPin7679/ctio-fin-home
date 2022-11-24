const express = require("express");
const router = express.Router();
const { postCalc } = require("../controllers/calcController")

router.post("/", postCalc)

module.exports = router