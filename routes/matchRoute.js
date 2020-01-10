const router = require('express').Router()

const matchController = require('../controllers/matchController')
const authentication = require('../middleware/authentication')
router.post('/', authentication, matchController.checkAnswers)

module.exports = router