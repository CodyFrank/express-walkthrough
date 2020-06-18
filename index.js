const express = require('express')
const app = express()
const path = require('path')
const members = require('./Members')
const logger = require('./middleware/logger')

app.use(logger)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/members', (req, res)=>{
    res.json(members)
})

app.get('/api/members/:id', (req, res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No member found with id of ${req.params.id}`})
    }
})



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))