const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')


router.get('/', userController.getUsers)

router.post('/google-sign-in', userController.signIn)

router.post('/manual-sign-up', userController.manualSignUp)

router.get('/game', userController.startGame)

module.exports = router