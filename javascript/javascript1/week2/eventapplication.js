//This file contains a homework for HackYourFuture javascript week2
//Event Application
/*This javascript code will 
finding out the event's day
  */
//Author: Rakhshanda Rashid
const weekDays= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const todayDate = new Date (); 
const todayDay = todayDate.getDay();
let eventHeldDay;
let eventDay;
function getEventWeekDay (eventDay) {
    
     eventHeldDay = weekDays[(todayDay + eventDay) % 7];
     return eventHeldDay;
}
console.log("The event is held on:" + " " + getEventWeekDay(2));
