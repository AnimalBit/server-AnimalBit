const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    try {
        let token = 'hardcodedulu'
        const decoded = jwt.verify(token, process.env.SECRET_JWT)
        req.currentUser = decoded.id
    } catch(err) {

    }
}