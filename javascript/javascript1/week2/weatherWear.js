//This file contains a homework for HackYourFuture javascript week2
//Weather Wear Calculater
/*This javascript code will 
help to fin out what dress 
should to wear according to
 weather 
*/
//Author: Rakhshanda Rashid

function pickClothesToWear(currentTemperature)
{
    if(currentTemperature>=50)
    {
        return "too hot you should wear T-shirt and loose trouser"
    }
    if(currentTemperature>=20)
    {
        return "quite hot you should wear light summer clothes"
    }
    if(currentTemperature>=10)
    {
        return "is bit changing you should wear Light clothes with summer jacket"

    }
    if(currentTemperature<0)
    {
        return "too cold you should wear Winter Jacket with gloves and warm cap"
    }
}
console.log("The temperature is" + " " + pickClothesToWear(40));