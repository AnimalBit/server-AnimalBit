require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/index')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/AnimalBit', {useNewUrlParser: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connection ongoing.')
})

app.use('/', routes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${3000}`)
})