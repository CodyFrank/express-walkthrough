const express = require('express')
const app = express()
const path = require('path')
const members = require('./Members')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/members', (req, res)=>{
    res.json(members)
})

// app.get( '/', (req, res)=>{
//     res.sendFile(path.join( __dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))