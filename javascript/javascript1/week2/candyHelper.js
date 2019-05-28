//This file contains a homework for HackYourFuture javascript week2
//Candy Helper
/*This javascript code will 
calculate the price of candies 
per gram,and will also calculate if
you can buy more candies or not
  */
//Author: Rakhshanda Rashid



let candyType="Toffee";
let weight=10;
let price;
let boughtCandyPrices=[];
let amountToSpend=Math.random() * 100;

//function addCandy to calculate the price of candies per gram
function addCandy(candyType,weight)
{
   if(candyType === "sweet")
   {
     price=0.5*weight;
     boughtCandyPrices.push();
     return price;

   } 
  else if(candyType === "Chocolate")
   {
    price=0.7*weight
    boughtCandyPrices.push(price);
    return price;
   } 
  else if(candyType === "Toffee")
   {
    price=1.1*weight;
    boughtCandyPrices.push(price);
    return price;
   } 
  else if(candyType === "Chewing-gum")
   {
    price=0.03*weight;
    boughtCandyPrices.push(price);
    return price;
   } 
  
  }
  console.log("Price for  " + weight + " " + "gram of  " + candyType + "  is  " + addCandy("Toffee",weight));
  console.log("Number of price entries in price array is " + boughtCandyPrices.length)

// New Function canBuyMoreCandy
const candyBool="True"; 
function canBuyMoreCandy(candyBool)
{
  let buyOrNotBuyMoreCandy=0;
  let i=0;
  while(i<boughtCandyPrices.length)
  {
    buyOrNotBuyMoreCandy+=boughtCandyPrices[i];
    i++;
  }
  if(buyOrNotBuyMoreCandy < amountToSpend)
   {
     console.log("You can buy more, so please do!");
     return candyBool; 
     
   }
   else {
     console.log("Enough candy for you!");
     return false;
   }
}
canBuyMoreCandy(candyBool)
