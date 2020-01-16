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
    required: true
  },
  description: {
    type: String
  }
})

module.exports = Issue = mongoose.model('issue', IssueSchema)