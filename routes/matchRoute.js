const router = require('express').Router()

const matchController = require('../controllers/matchController')

router.post('/',matchController.checkAnswers)

module.exports = router