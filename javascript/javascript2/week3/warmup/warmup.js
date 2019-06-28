// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

let timeOutFunction = logOut => {
    setTimeout(() => {
     
        console.log('logged me in 2.5 sec');
    
    },logOut);
    
}
let x = function(delay,callback){
callback(delay);
}

x(2500,timeOutFunction);

// 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

//function y takes two parameters 
let y = (delay, stringToLog) => {
  
    stringToLog(delay);         //function stringtoDisplay is called by passing delay parameter

}
//string to Display function will log out string in 5 seconds
let stringToDisplay=str => {
    setTimeout(() => {
        console.log("Logged me after 5 seconds");
     }, +str);
   
};

y(5000,stringToDisplay);

/* 3. Create a button in html. 
When clicking this button, use the function you created in the previous task 
to log out the text: 3.5 seconds after button is clicked 3.5 seconds 
after the button is clicked.*/

const btn = document.querySelector('.btn-clickMe');
btn.addEventListener('click', y(3500,stringToDisplay));//calling the timeout function


/* 4. Create two functions and assign them to two different variables. 
One function logs out Earth, the other function logs out Saturn.
 Now create a new third function that has one parameter: planetLogFunction. 
 The only thing the third function should do is call the provided parameter function. 
 Try call the third function once with the Earth function and once with the Saturn function. */

 let earthFunction= () => {

     console.log("Earth");                //function log out with Earth
 }

 let saturnFunction = () => {
    console.log("Saturn");                //function log out with Saturn
}
 
 let callBackFunction= callback => {
     callback();
 }                                          //Call Back Function

 callBackFunction(earthFunction);         //Calling both functions
 callBackFunction(saturnFunction);
 
 
 // 5. Browser API --current Location of user
 
// callback invoked when location data is fetched
let callBackGeoFunction = () => {
    navigator.geolocation.getCurrentPosition(locationSuccess);
} 
function locationSuccess(position) {
	let details = position.coords;
	
	// fetches latitude
	console.log("Latitude: " + details.latitude);
	
	// fetches longitude
	console.log("Longitude: " + details.longitude);
	
	// fetches accuracy of location (in metres)
	console.log("Accuracy: " + details.accuracy);
}

 let buttonGeoLocation = document.querySelector('.btn-geoLocation');
 buttonGeoLocation.addEventListener('click',callBackGeoFunction);



/* 7. Create a function called runAfterDelay.
 It has two parameters: delay and callback. 
 When called the function should wait delay seconds
and then call the provided callback function.
 Try and call this function with different delays and different callback functions*/
 
 //Call Back Function
 let runAfterDelay = (delay, callback) => {
    callback(delay);
 }
 //Addition Function for one delay call

 let Add = (delay1) => {
    setTimeout(() => { 
        let x=5+6;
        console.log(`Addition of 5 and 6 is: ${x}`);  
    }, +delay1);
    
}
//Names log Function for second delay call
let ArrayOfNames = (delay2) => {
    setTimeout(() => { 
    const names =["Sabine" , "Jesper" ,"Gerd" ,"Mette" , "Jenie"];
    console.log(names);
}, +delay2);
}
//Addition Function for third delay call
let multiply = (delay3) => {
    setTimeout(() => { 
    let x=12 * 15;
    console.log(`Multiplication of 5 and 6 is: ${x}`);
}, +delay3);
}
 runAfterDelay(4000, Add);
 runAfterDelay(5000, ArrayOfNames);
 runAfterDelay(6000,multiply);


 /* Check if we have double clicked on the page.
  A double click is defined by two clicks within 0.5 seconds.
  If a double click has been detected, log out the text: "double click!"*/ 
  function doubleClick() {
    setTimeout(() => {
        console.log("double clicked in 1.5 sec");
    }, 1500);
    document.querySelector(".double-click");
  }
  


  /*let s = (late,call) => {
      call(late);
  }
  

  let logOutText = (logud) => {
    setTimeout(() =>{     
    
    console.log('double click');

  });
}
let doubleClick = document.querySelector('p.double-click');
doubleClick.addEventListener('dblClick',logOutText);*/
      
/*Create a function called jokeCreator 
that has three parameters: shouldTellFunnyJoke - boolean,
 logFunnyJoke - function and logBadJoke - function. 
 If you set tellFunnyJoke to true it should call the logFunnyJoke function 
 that should log out a funny joke. And vice versa.*/ 

 function funnyJoke (){
    console.log("This is a funny Joke");
  }
  function badJoke (){
    console.log ("This is a bad joke");
  }
  function jokeCreater (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke === true) {
      logFunnyJoke();
    } else {
      logBadJoke ();
    }
  }
  jokeCreater (true, funnyJoke, badJoke);
  jokeCreater (false, funnyJoke, badJoke);