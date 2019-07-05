
let searchGif = document.querySelector('#searchgif');
let numberOfGif=document.querySelector('#noOfgif');
let btn = document.querySelector('#searchBtn');
btn.addEventListener('click', function () {
    let search = searchGif.value;
    if (search === "") {
        alert("Please enter the city");
        return false;
    }
    document.querySelector('.display-gif').innerHTML = "";
    fetch('https://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=8wqf9mmnXHgAQr5Og1s7PjeyShYg8OGx')
        .then(response => response.json())
        .then(response => {
            console.log(response);

            
            for (let i = 0; i <= (numberOfGif.value)-1; i++) {
                let display = document.querySelector('.display-gif');
                let h2 = document.createElement('h2');
                h2.innerHTML = response.data[i].title;
                display.appendChild(h2);
                let image = document.createElement('img');
                image.src = response.data[i].images.original.url;
                display.appendChild(image);
            }
        })
})