let numbers = [1, 2, 3, 4];
let newNumbers=[];
let oddNumber=[];


        oddNumber=numbers.filter( a => a%2 !== 0) ;
        console.log("odd number: " + oddNumber);
        newNumbers=oddNumber.map(doubleNumber => doubleNumber * 2);
            
        console.log("double numbers: " + newNumbers)
        
            