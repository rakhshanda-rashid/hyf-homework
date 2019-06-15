//HomeWork for HackYour Future
//Javascript2 week 1
//Author:Rakhshanda Rashid
//A code contains two functions to calculate the average and median of the array.

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
//average function 
function average(price){
    for(let i = 0; i < price.length; i++) {
        total += price[i];
        let avg = total / price.length;
        return avg;
    }
    
    

}
let total=0;
console.log("Average price of house is " + average(housePrices));

//median of array
function median(price)
{
price.sort((a, b) => a - b);
let lowMiddle = Math.floor((price.length - 1) / 2);
let highMiddle = Math.ceil((price.length - 1) / 2);
let median = (price[lowMiddle] + price[highMiddle]) / 2;
return median;
}
console.log("median of array is " + median(housePrices));