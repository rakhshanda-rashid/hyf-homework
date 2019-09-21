const express = require("express");
const app = express();
const PORT = 3000;
app.get('/calculator/:operator', (req, res) => {
    const paramsOperator = req.params.operator;
    const queryOperator = req.query;
    //const numbers = [];
    let response=undefined;

    for (const param in queryOperator) {
        const number = Number(queryOperator[param]);
        if(response === undefined){
            response = number;
        }
        else{

       
            switch (paramsOperator) {
                case 'addition':
                    response += number;
                    break;
                case 'subtraction':
                    response -= number;
                    break;
                case 'multiplication':
                    response *= number;
                    break;
                case 'division':
                    response /= number;
                    break;
                default:
                 response = "Sorry, please enter a valid operator!"

            }
        }
    
    res.send(response);
     }
app.listen(PORT, () => {
    console.log('Server is listening at 3000');
});
});

// 	switch(calculator){
// 		case "addition":
// 		result = add(num1, num2);
// 		break;

// 		case "subtraction":
// 		result = subtract(num1, num2);
// 		break;

// 		case "multiplication":
// 		result = multiply(num1, num2);
// 		break;

// 		case "division":
// 		result = divide(num1, num2);
// 		break;

// 		default:
// 		result = "Sorry, please enter a valid operator!"
// 	}

// 	function add(a, b){
//         return a + b
        
// 	}

// 	function subtract(a, b){
// 		return a - b
// 	}

// 	function multiply(a, b){
// 		return a * b
// 	}

// 	function divide(a, b){
// 		return a / b
// 	}

// 	res.json(result);
// });

// app.get("/", function(req, res){
// 	res.send("hello! please type some math y'all")
// });

//listener
