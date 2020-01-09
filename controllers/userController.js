const { OAuth2Client } = require('google-auth-library') 
const client = new OAuth2Client(process.env.CLIENT_ID)
const jwt = require('jsonwebtoken')
const User = require('../models/user')
module.exports = {
    getUsers(req, res, next) {
        User.find().populate('matches')
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err.message)
                next(500)
            })
    },
    signIn(req, res, next) {
        let userData
        let token = req.body.google_token
        client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                userData = ticket.getPayload();
                return User.findOne({ email: userData.email })
            })
            .then(result => {
                if(result) {
                    return result
                } else {
                    return User.create({
                        fullname: userData.name,
                        email: userData.email,
                        password: process.env.DEFAULT_PASSWORD_OAUTH,
                        matches: []
                    })
                }
            })
            .then(user => {
                const access_token = jwt.sign({
                    _id: user._id
                }, process.env.SECRET_JWT)
                res.status(200).json({access_token})
            })
            .catch(err => {
                console.log(err.message)
                next(400)
            })
    }
}