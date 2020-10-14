const jwt = require('jsonwebtoken')
const { keyword } = require('./index')

module.exports={
    createJWTToken(payload){
        return jwt.sign(payload,"puripuri",{expiresIn:'12h'})
    }
}