const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const authentication = require('../middleware/authentication')

router.post('/google-sign-in', userController.signIn)


router.get('/', userController.getUsers)


router.get('/game', userController.startGame)

module.exports = router