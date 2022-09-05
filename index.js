const express = require('express')
const mongoose = require('mongoose')
const app = express()
const url = 'mongodb://localhost/stuDB'
mongoose.connect(url)

const con = mongoose.connection



con.on('open', (req, res) => {

    console.log("connected buddy")
})


app.use(express.json())
const stuRouter = require('./routes/students')
app.use('/stud', stuRouter)

app.listen(8084, () => {
    console.log("server start")
})