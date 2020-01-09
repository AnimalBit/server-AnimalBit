const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/', userController.getUsers)

router.get('/google-sign-in', userController.signIn)
module.exports = router