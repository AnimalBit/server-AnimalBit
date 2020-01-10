const Match = require('../models/match')

module.exports = {
	
	checkAnswers(req, res, next) {
		let userAnswers = req.body.userChoices;
		let userQuestions = req.body.gameQuestions;
		let correctAnswers = 0;
		for (let i = 0; i < userQuestions.length; i++) {
				if (userQuestions[i].answer === userAnswers[i]) {
						correctAnswers++
				}
		}
		Match.create({
				userId: req.currentUser,
				correctAnswers: correctAnswers
		})
		.then(result => {
				res.status(200).json(result)
		})
		.catch(err => {
				console.log(err.message)
				next(err)
		})  
	}
}