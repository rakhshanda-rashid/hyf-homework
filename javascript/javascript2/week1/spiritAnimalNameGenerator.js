var spiritAnimal = ["Lion - The Angry Guy", "Deer - The Loving Man", " Butterfly - The Smiling bab",
    "Spider - The Creative Man", "Horse - The Powerful Guy", "Owl - The Wise Man",
    , "Fox - The Clever Honey","Dog - The Loyal Guy"
   , "Snake - The dangerous guy"
];
const select = document.querySelector('select');
//button click eventlistener
btn.addEventListener('click',renderNewAnimalSpirit);
//mouseover and change eventlistener
inputBox.addEventListener('mouseover', function(){
    if(select.value == 'buttonClick'){
        event.stopPropagation();
    }else{
        renderNewAnimalSpirit();
    }
});       
//Handles select change    
select.addEventListener('change', function () {    
    if (select.options[0].selected) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

function spiritAnimalNameGen() 
{
    
    let userName = document.getElementById("userName").value;
    if(!userName) 
       {
        alert("Please enter your name");
       }
    let  randomAnimalNumber = Math.floor(Math.random() * 10);
    let spiritanimalName = spiritAnimal[randomAnimalNumber];
    document.getElementById("animalName").innerHTML = "Name : " + userName +  " - " + spiritanimalName;
}