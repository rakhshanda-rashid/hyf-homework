const express= require('express');
const smsRouter=express.Router();

// Environmental Variables For Twillio Account 
require('dotenv').config();
const accountSid=process.env.ACCOUNT_SID;
//console.log(accountSid);
const authToken=process.env.AUTH_TOKEN;
//console.log(authToken);
const twillioNumber = process.env.TwillioNumber;
//console.log(twillioNumber);
const myNumber = process.env.MyNumber;
//console.log(myNumber) ;
//twilio client variable
const client = require('twilio')(accountSid, authToken);
// receive sms
const MessagingResponse = require('twilio').twiml.MessagingResponse;


//Database
// Database
const pool = require ('./databaseHandler.js');

//orderClass
const orderClass=require('./orderClass.js');
console.log(orderClass);
console.log(orderClass.type);
//middleware
const bodyParser=require('body-parser');
smsRouter.use (bodyParser.json ());
smsRouter.use(bodyParser.urlencoded({ extended: false }));

  // response that you want to send back in response immediately
  // let twiml = new MessagingResponse();

  /*--------------------From here functions Starts-----------------*/
  
  //Responsing Messages
  function messageResponse(res, responseMassage){
    const twiml = new MessagingResponse();
    twiml.message(responseMassage);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  };

  //Create New Order Function refers to Order
function createNewOrder(res,newOrderType){
  if(newOrderType ==='pizza' || newOrderType ==='burger' || newOrderType ==='salad'){
    try{
      const newOrder = new Order(newOrderType, 'ordered', new Date(), new Date())
      pool.query("insert into Order set ?", newOrder, (err, result, query) => {
        if (err) {
          throw err;
        } else {
          newOrder.id = result.insertId;
        console.log(`your order id is forwarded now for preparation${result.insertId}`);
        sendResponse (res, message);
        }
      });
    }catch(err){
      res.status(400);
      next(err)
    }
  }
}
//Function for checking status of Order
function statusChecker (res, id) {
  pool.query ('select * from orders where id = ?', id, (err, results, fields) => {
      if (err) {
          console.error(err);
      } else {
          console.log(results);
          message = `The status of your order is: ${results[0].status}. Last updated: ${results[0].modified}`;
          sendResponse(res, message);
      } 
  }
  )
}

//GET

smsRouter.get('/',(req,res) =>{
client.messages
.create({
   body: 'Hi, this is sms from Rakhshanda project',
    // number bought from twillio
   from: 'twillioNumber',
   //my number
   to: 'myNumber'
 })
.then(message => console.log(message.sid));
const twiml = new MessagingResponse();
twiml.message('The Robots are coming! Head for the hills!');  
})

//POST

smsRouter.post('/', (req, res) => {
    // look in res.body to see incoming message  
    let bodyListner= req.body.Body;
    console.log(bodyListner);
    bodyListner = body.toLowerCase().split(' ');
    console.log(bodyListner);
    let message;
    if (body.includes('help' || 'guide')){
      response = "Choose MENU to see menu, ORDER to order food or choose STATUS to check status of the order"
      messageResponse(res,response);
    }
    else if (body.includes('menu')){
      
      response = "We have three types in menu pizza, burger or salad"
      messageResponse(res,response);
    }
    else if(body.includes('order')){
      response = createNewOrder(res,body[1])
      messageResponse(res,response);
    }
    else if(body.includes('status')){
      response= statusChecker(res,body[1])
      messageResponse(res,response);


    }
  else{
    response = 'Hello ! what you want to know?';
    messageResponse(res,response);
  }
  
 
  
  });

  

  //   console.log(req.body.Body);
  //   console.log('hello world');
  //   processRequest(req.body.Body.toLowerCase())
  //   .then(function(result){
  //     twiml.message(result);
  //     res.writeHead(200, {'Content-Type': 'text/xml'});
  //     res.end(twiml.toString());
  //   });
  // });


module.exports=smsRouter;