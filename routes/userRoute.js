const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/', userController.getUsers)

router.post('/google-sign-in', userController.signIn)

router.get('/game', userController.startGame)

router.post('/game', userController.checkAnswers)
module.exports = router