const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchSchema = new Schema({
    userId: Schema.ObjectID,
    correctAnswers: Number
})

const Match = mongoose.model('Match', matchSchema)

module.exports = Match