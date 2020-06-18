const express = require('express')
const app = express()
const path = require('path')

const members = [
    {
        id: 1,
        name: "Spiderman",
        age: 17
    },
    {
        id: 2,
        name: "Ironman",
        age: 44
    },
    {
        id: 3,
        name: "Nick Fury",
        age: 58
    }
]

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/members', (req, res)=>{

})

// app.get( '/', (req, res)=>{
//     res.sendFile(path.join( __dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))