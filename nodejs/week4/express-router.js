const express=require('express');
const expressRouter=express.Router();

expressRouter.get('/', (req,res) =>{
    res.send('HI, My app can now view publicly');
    });

    
    //res.send('ok')
module.exports=expressRouter;