//getting environmental variables
require('dotenv').config()

//require express ,fetching routers
const express=require('express');
const app= express();
const expressRouter = require("./express-router");
const bodyParser = require ('body-parser');
const PORT=process.env.PORT || 3000 ||5000;
const subdomainKey = process.env.SUBDOMAIN_KEY;
console.log(PORT)
console.log(subdomainKey);
const localtunnel=require('localtunnel');

const accountSid=process.env.ACCOUNT_SID;
console.log(accountSid);
const authToken=process.env.AUTH_TOKEN;
console.log(authToken);

// a. setup twilio client
const client = require('twilio')(accountSid, authToken);

// b. to send message
client.messages
.create({
   body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
   // your number
   from: '+4542780560',
   // number bought from twilio
   to: '+4592453547'
 })
.then(message => console.log(message.sid));


//middleware
expressRouter.use(bodyParser.urlencoded ({extended: false}));
app.use(bodyParser.json());


//mount the Routers
app.use("/check", expressRouter);



app.listen(PORT , () =>{
    console.log('app is listening')
})

//localtunnel.me
const tunnel= localtunnel(PORT, {subdomain:'rakhshanda-aimah-voldflojen'} , (err, tunnel)  => {
    if (!err)
      console.log('Tunnel is open');
    else
      console.log('Error opening tunnel: ', err);
  });
  
  tunnel.on('close', function() {
    // When the tunnel is closed
    console.log('Tunnel is closed');
  });