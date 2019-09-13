//Respond with the json for all reservations

const express = require('express');
const router= express.Router();




const hasReservation= require('../data/reservations.json');

router.get('/reservation', (req,res) =>{
    res.json(hasReservation);
    });

    
    //res.send('ok')
module.exports=router;