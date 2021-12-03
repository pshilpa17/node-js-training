const { nextTick } = require("async")

const checkAuthentication = (req,res,next)=>{
    //if sessnion goto article
    if(!req.session.userID){
        console.log(req.session)
        res.redirect('/login')
    }
    else{
        next()}}
module.exports = checkAuthentication;