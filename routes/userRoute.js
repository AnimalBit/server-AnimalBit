const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const authentication = require('../middleware/authentication')

router.get('/', authentication, userController.getUsers)

router.post('/google-sign-in', userController.signIn)

router.get('/game', authentication, userController.startGame)

module.exports = router