/*A file contains home work for Hack Your Future
Javascript week1
Author:Rakhshanda Rashid
Housey pricey(A house price estimator)*/

let friendNames=["peter","julia"];
let houseWidth=[8,5];
let houseDepth=[10,11];
let houseHeight=[10,8];
let gardenSizeInM2=[100,70];

//Calculation for peter house
let volumeInMeters=houseWidth[0] * houseDepth[0] * houseHeight[0];
let housePrice=volumeInMeters * 2.5 * 1000 + gardenSizeInM2[0] * 300;
if(housePrice>2500000)
{
    console.log("Peter is paying too much high price");
}
else {
  console.log("Peter is paying low price");
}

//Calculation for julia house
volumeInMeters=houseWidth[1] * houseDepth[1] * houseHeight[1];
housePrice=volumeInMeters * 2.5 * 1000 + gardenSizeInM2[1] * 300;
if(housePrice>1000000)
{
    console.log("Julia is paying too much high price");
}
else {
  console.log("Julia is paying good price");
}