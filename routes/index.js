const express = require('express')
const router = express.Router()

const userRoute = require('./userRoute')
const matchRoute = require('./matchRoute')

router.use('/users', userRoute)
router.use('/matches', matchRoute)

module.exports = router