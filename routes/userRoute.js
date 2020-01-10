const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const authentication = require('../middleware/authentication')

<<<<<<< HEAD
router.get('/', authentication, userController.getUsers)

router.post('/google-sign-in', userController.signIn)

router.get('/game', authentication, userController.startGame)
=======

router.get('/', userController.getUsers)

router.post('/google-sign-in', userController.signIn)

router.post('/manual-sign-up', userController.manualSignUp)

router.get('/game', userController.startGame)
>>>>>>> development

module.exports = router