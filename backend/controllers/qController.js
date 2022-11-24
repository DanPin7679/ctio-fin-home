const Question = require("../model/qModel")
const mongoose = require("mongoose")


const getQuestions = async (req, res) => {
  const questions = await Question.find({}).sort({createdAt: -1})
  res.status(200).json(questions)
}

const getQuestion = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such question"})
  }
  const question = await Question.findById(id)

  if (!question){
    return res.status(404).json({error: "No such question"})
  }
  res.status(200).json(question)
}

const createQuestion = async(req, res)=>{
  const {id, question, category, answers} = req.body
  try {
    const q = await Question.create({id, question, category, answers})
    res.status(200).json(q)
  } catch (error) {
    res.status(400).json({error: error.message})
    console.log(error)
  }
}

const delQuestion = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such question"})
  }

  const question = await Question.findOneAndDelete({_id: id})

  if (!question){
    return res.status(404).json({error: "No such question"})
  }
  res.status(200).json(question)
}

const updateQuestion = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such question"})
  }

  const question = await Question.findOneAndUpdate({_id: id}, {...req.body})
  
  if (!question){
    return res.status(404).json({error: "No such question"})
  }
  res.status(200).json(question)
}

module.exports = {
  createQuestion, 
  getQuestions, 
  getQuestion, 
  delQuestion, 
  updateQuestion
}