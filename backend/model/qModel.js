const mongoose = require("mongoose")

const Schema = mongoose.Schema

const questionSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  answers: {
    type: [String],
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Question', questionSchema)



