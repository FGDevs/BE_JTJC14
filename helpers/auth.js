const jwt = require('jsonwebtoken')
const { keyword } = require('./index')

module.exports={
    auth:(request,respond,next)=>{
        if(request.method !== "OPTIONS"){
            console.log(request.token)
            jwt.verify(request.token, "puripuri", (error,decoded)=>{
                if(error) respond.status(401).json({
                    message:"User not authorized.",
                    error:"User not authorized."
                })
                console.log(decoded,'ini decode')
                request.user=decoded
                next()
            })
        }else{
            next()
        }
    }
}