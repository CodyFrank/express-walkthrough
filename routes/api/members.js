const express = require('express')
const members = require('../../Members')
const router = express.Router()

router.get('/', (req, res)=>{
    res.json(members)
})

router.get('/:id', (req, res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No member found with id of ${req.params.id}`})
    }
})

module.exports = router