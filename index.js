const express = require('express')
const app = express()
const path = require('path')
const logger = require('./middleware/logger')
const exphbs = require('express-handlebars')
const members = require('./Members')

// uses logger middleware
app.use(logger)

// handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// use bodyparser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Members App',
        members
    })
})

// static routes
// app.use(express.static(path.join(__dirname, 'public')))

// members api routes
app.use('/api/members', require('./routes/api/members'))


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))