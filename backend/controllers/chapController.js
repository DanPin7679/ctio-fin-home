//const Question = require("../model/qModel")
//const mongoose = require("mongoose")

const createChapitre = async (req, res) => {
  console.log(req.body)
  res.status(200).json(req.body)
}


module.exports = {
  createChapitre
}