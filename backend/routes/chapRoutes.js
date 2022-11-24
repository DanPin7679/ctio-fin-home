const express = require("express");
const router = express.Router();
const { createChapitre } = require("../controllers/chapController")

router.post("/", createChapitre)

module.exports = router