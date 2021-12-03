const express = require('express');
const checkAuthentication=require('../middleware/checkAuthentication')
//initialise with app
const Articles = require('../models/article')
const router = express.Router()
//middleware checkAuthentication
//get all atricles
router.get('/',checkAuthentication, (req,res)=>{
    const result = Articles.getAll()
    res.render('index',{title: "All Articles", articles:result})
});

router.get('/add',(req,res) => {
    res.render('add_article', {title:'add_view'})
    });

//should be saving data in db
router.get('/saveForm', (req,res)=>{
    res.send(req.query)
    });
    
module.exports = router;