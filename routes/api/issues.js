const express = require('express')
const router = express.Router()

// issue model
const Issue = require('../../models/Issue')

// @route GET api/issues
// @desc Get all issues
// @access public
router.get('/', (req, res) => {
  Issue.find()
    .sort({ date: -1 })
    .then(issues => res.json(issues))
})

// @route POST api/issues
// @desc Create an issue
// @access public
router.post('/', (req, res) => {
  const newIssue = new Issue({
    subject: req.body.subject,
    severity: req.body.severity
  })

  newIssue.save().then(issue => res.json(issue)).catch(err => console.log(err))
})

// @route DELETE api/issue/:id
// @desc Delete an issue
// @access public
router.delete('/:id', (req, res) => {
  Issue.findById(req.params.id)
    .then(issue => issue.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})

module.exports = router

