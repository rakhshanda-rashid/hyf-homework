const express = require('express');
const router= express.Router();

//let bodyParser=require('body-parser');
//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({extended:true}));



const meals = require('../data/meals.json');
//console.log(meals);
router.get('/meals/:id', (req,res) =>{
    const paramsId=req.params.id;
    //console.log(paramsId);
    const mealId=meals.filter(meal => {
      return meal.Id === +paramsId;
    });

    res.json(mealId);
    //res.send('ok')
});
module.exports=router;