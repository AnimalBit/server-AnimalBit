const Match = require('../models/match')

module.exports = {
	
	checkAnswers(req, res, next) {
		let userAnswers = req.body.userChoices;
		let userQuestions = req.body.gameQuestions;
		let correctAnswers = 0;
		let results = []
		for (let i = 0; i < userQuestions.length; i++) {
				if (userQuestions[i].answer === userAnswers[i]) {
						correctAnswers++
						results.push(true)
				} else {
					results.push(false)
				}
		}
		Match.create({
				userId: req.currentUser,
				correctAnswers: correctAnswers
		})
		.then(match => {
				res.status(200).json({
					match,
					stats: results,
					userQuestions
				})
		})
		.catch(err => {
				console.log(err.message)
				next(err)
		})  
	}
}