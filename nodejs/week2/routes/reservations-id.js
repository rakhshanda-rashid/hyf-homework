//Respond with the json for the reservation with the corresponding id

const express = require('express');
const router= express.Router();

//let bodyParser=require('body-parser');
//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({extended:true}));



const hasReservation= require('../data/reservations.json');

router.get('/reservation/:id', (req,res) =>{
    const paramsId=req.params.id;
    //console.log(paramsId);
    const reservationId=hasReservation.filter(reserve => {
      return reserve.MealId=== +paramsId;
    });

    res.json(reservationId);
    //res.send('ok')
});
module.exports=router;