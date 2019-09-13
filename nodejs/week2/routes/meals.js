const express = require("express");
const router = express.Router();

const meals = require('../data/meals.json');

let mealsQueriesResponse = meals;

 router.get ('/meals', (req, res, next)=>{
// 
      const requestedParams={
      maxPrice:req.query.maxPrice,
      title:req.query.title,
      createdAfter:req.query.createdAfter,
      limit:req.query.limit
     }

    if(requestedParams.maxPrice)
    {
            mealsQueriesResponse = meals.filter(meal=> {
            return meal.Price < requestedParams.maxPrice;
            
        });
      next();
    }
    if(requestedParams.title)
    {

       mealsQueriesResponse= meals.filter(meal => {
       return meal.Title.toLowerCase().includes(requestedParams.title.toLowerCase());
        //return mealTitle.localeCompare(meal.Title);
        });
        next();
    }

    
    if(requestedParams.createdAfter)
    {
            mealsQueriesResponse= meals.filter(meal => {
            return meal.CreatedDate.split(' ')[0] > requestedParams.createdAfter;
            //return Date.parse(meal.CreatedDate) > Date.parse(requestedParams.createdAfter) ;
     });
     next();
    }
    if(requestedParams.limit){
        
            mealsQueriesResponse = meals.slice(0, requestedParams.limit);
            console.log(mealsQueriesResponse.length);
          }
if(mealsQueriesResponse.length < 1){
            res.status(400).send("<h1>That is a bad request!</h1>");   
         }
          
        
    
    res.json(mealsQueriesResponse);
});
   /* if(requestedParams.limit)
    {
    }*/

module.exports = router;