const express = require('express')
const mongoose = require('mongoose')

const issues = require('./routes/api/issues')

const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// db config
const db = require('./config/keys').mongoURI

// connect to mongo
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// use routes
app.use('/api/issues', issues)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on ${port}...`))