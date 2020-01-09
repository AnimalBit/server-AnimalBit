const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User'},
    correctAnswers: Number
})

const Match = mongoose.model('Match', matchSchema)

module.exports = Match