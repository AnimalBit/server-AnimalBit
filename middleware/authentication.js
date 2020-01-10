const jwt = require('jsonwebtoken')
const User = require('../models/user')
module.exports = function(req, res, next){
    try {
        let token = req.headers.google_token
        const decoded = jwt.verify(token, process.env.SECRET_JWT)
        req.currentUser = decoded.id
        User.findOne({
            _id: req.currentUser
        })
            .then(result => {
                if (result) {
                    console.log(result)
                    next()
                } else {
                    res.status(400).json({
                        message: 'Token does not match'
                    })
                }
                
            }) 
            .catch(err => {
                next(500)
            })
    } catch(err) {
        next(403)
    }
}