/*A file contains home work for Hack Your Future
Javascript week1
Author:Rakhshanda Rashid

Goodboy-Oldboy (A dog age calculator)
*/



let dogYearOfBirth = 2014;
let dogYearFuture = 2027;
let ageInHumanYear = dogYearFuture - dogYearOfBirth; 
let dogYear =  ageInHumanYear * 7 ;
let shouldShowResultInDogYears = true ;
if (shouldShowResultInDogYears) {
    console.log ( " Your dog will be " + " " + dogYear + " " + " dog years old in " + " " + dogYearFuture) ;
  }
  else{
    console.log ( " Your dog will be " + ageInHumanYear + " human years old in " + dogYearFuture ) ; 
  }