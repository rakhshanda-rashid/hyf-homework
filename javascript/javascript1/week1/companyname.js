 
 
 
 /*
 A file contains home work for Hack Your Future
Javascript week1
Author:Rakhshanda Rashid
Ez Namey (Startup name generator)*/


 let firstWords = ["Easy", "Awesome", "Super", "Fantastic", "Classic", "Wonderful", 
 "Glourious", "Impressive", "Fascinating", "Magnificient"];
 let secondWords = ["Firm", "Shop", "CorporateFirm", "Partnership", "Designer", "Outlet", 
 "multinational", "Group", "Business", "Company"];
 
 const randomNumber = [Math.floor(Math.random() * 10) , Math.floor(Math.random() * 10)];
 let newStartupName = firstWords[randomNumber[0]] + " " + secondWords[randomNumber[1]]
 
 console.log("The startup: \"" + newStartupName + "\" contains " + newStartupName.length + " characters");
 