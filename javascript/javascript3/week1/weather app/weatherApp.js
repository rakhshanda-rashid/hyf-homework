let inputCity = document.querySelector('input');
let btn = document.getElementById('searchBtn');
btn.addEventListener("click", function () {
  let cityName = inputCity.value;
  if (cityName === " ") {
    alert("Please enter the city");
    return false;
  }
  document.querySelector('#weatherContainer').style.visibility = "visible";

  //fetch the data from a city
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=f8552d0e00cb87d3f30c34cf9aa9f3b8')
    .then(response => response.json())
    .then(response => {
      //display the data
      console.log(response);
      let cityName = document.querySelector('#city-name');
      let cityTemp = document.querySelector('#temp');
      let cityHumidity = document.querySelector('#humidity');
      let cityDesc = document.querySelector('#weatherDesc');
      let windSpeed = document.querySelector("#wind-speed");

      cityName.innerHTML = response.name;
      cityTemp.innerHTML = Math.floor(response.main.temp - 273.15) + "&#176" + "C ";
      cityHumidity.innerHTML = "Humidity :" + " " + response.main.humidity + "%";
      windSpeed.innerHTML = "Wind Speed :" + " " + Math.floor(response.wind.speed) + " " + "m/s";
      let weatherDesc = response.weather[0].description;
      //cityDesc.innerHTML = weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1);
      
      //for Weather icon 
      let iconId = response.weather[0].icon;
      let img = document.querySelector("#img1").src = "http://openweathermap.org/img/w/" + iconId + ".png";
    })
})
// Current Location


/* Get the weather by location 
let currentLocEvent = document.getElementById('currentLoc');
  
  currentLocEvent.addEventListener('click',getLocation);
function getCityByLocation (lat,lon){
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6f7ef7a9fe25ab961ed052229ba8c3b6`
  fetch(url)
  .then(response => response.json())
          .then((info) => {
          //weatherApp(info)
          });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
}

function showPosition(position) {
lat = position.coords.latitude;
lon = position.coords.longitude; 
getCityByLocation(lat,lon)
}*/
  