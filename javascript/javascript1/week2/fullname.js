//This file contains a homework for HackYourFuture javascript week2
//Flight booking fullname function
/*This javascript code will concatenate
 a First Name and Sur Name of the customer
  of travelling company.*/
//Author: Rakhshanda Rashid

const firstName="Rakhshanda";
const surName="Rashid";
let fullName1;
let fullName2;
let useFormalName=[true,false];
const formalName="Lord";
const spaces=" ";

function getFullName(firstName,surName,useFormalName) 
{   
  if(useFormalName === true)
  {  
     fullName1= formalName + spaces + firstName + spaces + surName;
     
    
     return fullName1;
  }
  else{
      fullName2= firstName + spaces + surName;
      return fullName2;
    }
}
  console.log("The full name of a traveller is" + " " + getFullName(firstName,surName,useFormalName[1]) );
