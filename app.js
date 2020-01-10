require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/index')
const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/AnimalBit', {useNewUrlParser: true, useUnifiedTopology: true})
require('./models/user')
require('./models/match')


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connection ongoing.')
})
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.use(cors())
app.use('/', routes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${3000}`)
})