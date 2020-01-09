const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    matches: [{ type: Schema.Types.ObjectId, ref: 'Match'}]
})

const User = mongoose.model('User', userSchema)

module.exports = User