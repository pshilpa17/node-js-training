const express = require('express');
const uuid = require('uuid');


//import models
const Members = {}//require('../../models/member');

const router=express.Router()

//creating APIs
router.get('/api/members', (req, res)=>{
    console.log("inside api member");
     res.json(Members.getAll())
    })
//get a member by id
//can add more params by /api/members/:id/:name etc
router.get('/:id', (req, res)=>{
    const id = req.params.id
    const result = Members.getMemberById(id)
    if(result.length>0)
        res.json({message: `member with id: ${req.params.id} found`, data: result})
    else
    res.status(400).json({message: `member with id: ${req.params.id} not found`, data: null, status:`fail`})
    })

/*
    //commenting this part as this has error
    //API to add new memeber
    router.post('/',(req,res)=>{
       // console.log(req.body)
        //add to json
        //we have to do input validation 
        const id= uuid.v4() 
        let newMember = req.body
        //newMember.id=id;
        const result = Members.addNew(req.body)
        if(result){
            res.json({message: 'New user added'})
        }
        else{
            res.json({message:'failed to add'})} 
    })

    */
    module.exports = router;