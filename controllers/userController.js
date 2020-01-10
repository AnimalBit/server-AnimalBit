const { OAuth2Client } = require('google-auth-library') 
const client = new OAuth2Client(process.env.CLIENT_ID)
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Match = require('../models/match')
const axios = require('axios')

const catApi = require('../axios/cat')
const duckApi = require('../axios/duck')
const shibeApi = require('../axios/shibe')

let answers = [];

module.exports = {

    manualSignUp(req, res, next) {
        const {email,password} = req.body
        
        const values = {
            email, 
            password
        }

        User.findOne({
            email
        })
            .then(user => {
                if (!user) {
                    User.create(values)
                        .then(createdUser => {
                            const access_token = jwt.sign({
                                _id: createdUser._id
                            }, process.env.SECRET_JWT)
                            res.status(200).json({access_token})
                        })
                } else {
                    console.log('User already exist')
                    next(500)
                }
            })

    },

    getUsers(req, res, next) {
        User.find().populate('matches')
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err)
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
    },
    async startGame(req, res, next) {
        let images = [];
        for (let i = 0; i < 10; i++) {
            let index = Math.floor(Math.random() * 3)
            if (index === 0) {
                await catApi
                .get('/images/search?limit=1')
                .then(response => {
                    images.push({ image: response.data[0].url, answer: 'cat' })
                })
                .catch(err => {
                    next(err)
                })
            } else if (index === 1) {
                await duckApi
                .get('/random')
                .then(response => {
                    images.push({ image: response.data.url, answer: 'duck' })
                })
                .catch(err => {
                    next(err)
                })
            } else if (index === 2) {
                await shibeApi
                .get('/shibes')
                .then(response => {
                    images.push({ image: response.data[0], answer: 'dog' })
                })
                .catch(err => {
                    next(err)
                })
            }
        }
        res.status(200).json(images)
    }
}