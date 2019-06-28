/*.The fastest presser in this realm is the mini Game in which user set the time to play and then countdown timer will starts 
,Player One will press S and Player Two will Press Y ,and at the end when time stops ,it will count how many times player one and player
two presses S & L and player with maximum numbers of key press will win w*/


let btn = document.querySelector('button.btn');
let boxOne = document.querySelector('div.container_one');
let boxTwo = document.querySelector('div.container_two');
let displayBoxOne = document.querySelector('span.displayBoxOne');
let displayBoxTwo = document.querySelector('span.displayBoxTwo');








// keyS and KeyL listener
function keyPres () {
    document.body.addEventListener('keypress', key => {
        var recognizeKey = key.which;
        let keyS = 115;
        let keyL = 108;
        if (recognizeKey === keyS) {
            displayBoxOne.innerHTML = playerOne++;

        }
        else if (recognizeKey === keyL) {
            displayBoxTwo.innerHTML = playerTwo++;
        }
    });
}

// Countdown function
let timer = document.getElementById('timer');
function countDown (sec, elem) {
    var element = document.getElementById(elem);
    element.innerHTML = sec;
    sec--;
    let timer = setTimeout('countDown('+ sec + ',"' + elem + '")', 1000);
    if(sec < 1 ) {
        clearTimeout(timer);
    }    
}

// Game conditions
let playerOne = 1;
let playerTwo = 1;
let result = document.getElementById('win_result');

function winnerSelector () {
    if (playerOne === playerTwo) {
        result.innerHTML = 'Game Draw';
    }
    else if (playerOne > playerTwo) {
        result.innerHTML = 'Player One(S) is Winner';
        //let image= document.querySelector('img');
        
        //result.innerHTML = document.getElementById('img');
    }
    else {
        result.innerHTML = 'Player One(L) is Winner';
    }   
}
// Reset Button
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    location.reload();
});


// main function 
function pressAndPlay () {
    var input = document.getElementById('inputNumber').value;
    let inputValue = parseInt(input);
    getSetGoAndPlay = inputValue * 1000;
    if (input.length === 0) {
        alert ('Enter Time');
    }
    else {
        countDown(inputValue,'win_result');
        keyPres();
        setTimeout(winnerSelector, getSetGoAndPlay);
    } 
}


btn.addEventListener('click', pressAndPlay);


