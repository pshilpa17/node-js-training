const express = require('express');
const UserModel = require('../models/user')
const bcrypt = require('bcrypt');
const router = express.Router()

const loginValidation= require('../schema/validation')
const signUpValidation= require('../schema/signUpvalidation.js');

router.get('/signup', (req,res)=>{
    res.render('signup', {title: 'New user signup screen'})
});
router.post('/saveForm', async(req,res)=>{
    //get request
    //console.log(req.body)
    const valid=signUpValidation(req.body)
    if(valid.error){
        res.render('signup',{message:valid.error.details[0].message})
    }
    //connect to db
    //prepare a query
    //insert data
    //if success return 
    //else return error
      try{
         const results = await UserModel.saveNewUser(req.body);
         res.render('signup',{title:'New USer Signup Page',message: 'Success'})
      }    catch(error){
          //console.log(error)
          res.render('signup',{title:'New USer Signup Page',message:'Failed'})  
      }
})

 router.get('/login', (req,res)=>{
    //console.log(req.session)
        res.render('login',{title: 'Login screen'})
 })

router.post('/login', async(req,res)=>{
    //console.log(req.body);
    const valid = loginValidation(req.body)
    if(valid.error){
        console.log(valid.error.details[0].message)
        res.render('login',{message:valid.error.details[0].message})
    }
    else{
        try{
    const result=await UserModel.getUserByEmaiID(req.body)
    if (result.length){
        const isvalidPassword = await bcrypt.compare(req.body.password, result[0].password)
            if(isvalidPassword) {
                    req.session.userID=result[0].id;
                    console.log(req.session);
                    res.redirect('/articles')
                    
                //res.render('add_article',{message:`New User Account Created for ${req.body.email}`})
            }else{
                res.render('login',{message:'Invalid Password'})
    }}else{
            res.render('login',{message:`user with email ${req.body.email} not found`})
        }}
     catch(error){
         res.render('login',{message:'Failed creating new user'+error})
                 
         }}

        })
        
module.exports = router;