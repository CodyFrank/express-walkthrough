const express = require('express')
const app = express()
const path = require('path')
const members = require('./Members')

const logger = (req, res, next) => {
    console.log(`${req.prot}:// ${req.get('host')}${req.originalUrl}`)
    next()
}

app.use(logger)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/members', (req, res)=>{
    res.json(members)
})



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))