const express = require('express')
const app = express()
const path = require('path')
const logger = require('./middleware/logger')

// uses logger middleware
app.use(logger)

// use bodyparser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// static routes
app.use(express.static(path.join(__dirname, 'public')))

// members api routes
app.use('/api/members', require('./routes/api/members'))


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))