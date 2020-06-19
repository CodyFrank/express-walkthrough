const express = require('express')
let members = require('../../Members')
const router = express.Router()
const uuid = require('uuid')



// member index page
router.get('/', (req, res)=>{
    res.json(members)
})

// member show page
router.get('/:id', (req, res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No member found with id of ${req.params.id}`})
    }
})

// member create page
router.post('/', (req, res)=>{
    member = {
        id: uuid.v4(),
        name: req.body.name,
        age: req.body.age
    }

    if (!member.name || !member.age) {
        return res.status(200).json({ msg: "please include a name and age"})
    }

    members.push(member)
    res.send(members)
})

// member update page
router.patch('/:id', (req, res) => {
    const found = members.some( member => member.id === parseInt(req.params.id))

    if (found) {
        const updMember = req.body
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name
                member.age = updMember.age ? updMember.age : mamber.age
                res.json(member)
            }
        })
    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}`})
    }
})

// member delete
router.delete('/:id', (req, res) => {
    const found = members.some( member => member.id === parseInt(req.params.id))

    if (found) {
        members = members.filter( member => member.id !== parseInt(req.params.id))
        res.json(members)
    } else {
        res.status(400).json({ msg: `no member found with id of ${id}`})
    }
})



module.exports = router