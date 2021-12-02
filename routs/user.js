const express = require('express');
const UserModel = require('../models/user')
const router = express.Router()

const loginValidation= require('../schema/validation')
const signUpValidation= require('../schema/signUpvalidation.js');

router.get('/signup', (req,res)=>{
    res.render('signup', {title: 'New user signup screen'})
});
router.post('/saveForm', async(req,res)=>{
    //get request
    console.log(req.body)
    const valid=signUpValidation(req.body)
    if(valid.error){
        res.render('signup',{message:valid.error.details[0].message})
    }
    //connect to db
    //prepare a query
    //insert data
    //if success return 
    //else return error
    //  try{
    //     const results = await UserModel.saveNewUser(req.body);
    //     res.render('signup',{title:'New USer Signup Page',message: 'Success'})
    //  }    catch(error){
    //      console.log(error)
    //      res.render('signup',{title:'New USer Signup Page',message:'Failed'})
        
    //  }
})
 router.get('/login', (req,res)=>{
        res.render('login',{title: 'Login screen'})
 })
router.post('/login', async(req,res)=>{
    console.log(req.body);
    const valid = loginValidation(req.body)
    console.log(valid)
    if(valid.error){
        res.render('login',{message:valid.error.details[0].message})
    }
    try{
    const result=await UserModel.getUserByEmaiID(req.body)
    console.log(result)
    //validations of email and password
    //email and pass are not empty
    // let error = '';
    // if(req.body.email.length == 0){
    //     error+= 'Email is required'}
    // else if(req.body.password.length == 0){
    //      error +='Password cannot be empty'}
    //     }
    //     if(error.length>0){
    //         res.render('login',{message:'error'}
    //     }
         if(result[0].password===req.body.password){
            res.render('add_article')}
         else{
             res.render('login',{message:'Invalid Password'})
        }}
     catch(error){
         console.log(error)
         res.render('login',{message:'login failed'})
               }   
            })
module.exports = router;