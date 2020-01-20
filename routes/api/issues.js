const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

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
// @access private
router.post('/', auth, (req, res) => {
  const newIssue = new Issue({
    subject: req.body.subject,
    severity: req.body.severity,
    author: req.body.author,
    description: req.body.description,
    status: req.body.status
  })

  newIssue
    .save()
    .then(issue => res.json(issue))
    .catch(err => console.log(err))
})

// @route DELETE api/issue/:id
// @desc Delete an issue
// @access private
router.delete('/:id', auth, (req, res) => {
  Issue.findById(req.params.id)
    .then(issue => issue.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})

// @route PUT api/issue/:id
// @desc Update an issue
// @access private
router.put('/:id/update', auth, (req, res) => {
  console.log('req', req)
  Issue.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { upsert: true, new: true, runValidators: true },
    (err, issue) => {
      if (err) return err
      res.json(issue)
    }
  )
})

module.exports = router
