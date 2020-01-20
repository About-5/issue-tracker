const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
const IssueSchema = new Schema({
  subject: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  severity: {
    type: Number,
    min: 1,
    max: 3,
    required: true
  },
  description: {
    type: String,
    default: 'No description given'
  },
  author: {
    type: String
  },
  status: {
    type: Number,
    min: 1,
    max: 2
  }
})

module.exports = Issue = mongoose.model('issue', IssueSchema)
