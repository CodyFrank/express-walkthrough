const express = require('express')
const app = express()
const members = require('../../Members')

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