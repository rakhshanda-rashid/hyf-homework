//getting environmental variables
require('dotenv').config()

//require express ,fetching routers
const express=require('express');
const app= express();
const localtunnel = require('localtunnel')
const bodyParser = require ('body-parser');
const router =express.Router();
const PORT = process.env.PORT || 3000 ||5000;
console.log(PORT);
// const subdomain = process.env.SUBDOMAIN;
// console.log(subdomain);

//middleware
app.use(bodyParser.json())
router.use(bodyParser.urlencoded ({extended: false}));

// app.use("*", (req,res,next)=>{
//   const{method,path} =req;
//   console.log(`${method} ${path}`);
//   next();

// });



//Mounting Routers
const checkerRouter = require('./checkerRouter.js');
//const incomingSmsRouter =require('./routers/incomingSmsRouter.js');
const incomingSms=require('./incomingSms.js');
//console.log(incomingSmsRouter);
const kitchenRouter = require('./kitchenRouter.js');

//using routers
app.use('/check',checkerRouter);
//app.use('/',incomingSmsRouter);
app.use('/newSms',incomingSms);
app.use('/kitchen/order',kitchenRouter);


// router.get('/incoming-sms',(req,res) =>{
//   return incomingSmsRouter;
// })





  app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
    const tunnel = localtunnel(PORT, { subdomain : 'rakhshanda-123'}, (err, tunnel) => {
        if (!err)
          console.log('Tunnel is open');
        else
          console.log('Error opening tunnel: ', err);
      });
      
      tunnel.on('close', function() {
        // When the tunnel is closed
        console.log('Tunnel is closed');
      });
})