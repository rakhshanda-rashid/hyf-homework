const express = require('express');
const app = express();


const mealsId= require('./routes/meals-id.js');
const allMeals =require('./routes/all-meals.js');
const reservationIds=require('./routes/reservations-id.js');
const allReservations= require('./routes/all-reservations.js');
const allReviews= require('./routes/all-reviews.js');
const meals= require('./routes/meals.js');

//app.get("/meal", (req,res)=>{
//   res.send("ok");
//})
app.get('/meals/:id', mealsId);
app.get('/all-meal', allMeals);
app.get('/reservation/:id',reservationIds);
app.get('/reservation',allReservations);
app.get('/all-reviews',allReviews);
app.get('/meals', meals);
app.listen(3000, () =>{
    console.log("server is running");
});