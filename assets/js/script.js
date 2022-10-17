//Current Weather API 
var requestUrl = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={e97808d5796e4a020875da81441691e5}"

var url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}` //<-Template literate
//^Received this from the OpenWeather email
var apiKey = "e97808d5796e4a020875da81441691e5"

var userInput = document.getElementById("userInput");
var searchBtn = document.getElementById("searchbtn");

function getWeather(city){
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
  .then( (response) => {
    return response.json();
  })
  .then( (data)=> {
    console.log('Test \n----------');
    console.log(data);
    var lon = data.coord.lon;
    var lat = data.coord.lat;
    var requestUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={minutely,hourly,alerts}&appid=${apiKey}&units=imperial`;

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
      })
      .then((data)=>{
        console.log(data)
        displayCurrentweather(data.current)

      })
  });
}
var mainWeather=document.querySelector(".mainWeather")

function displayCurrentweather(data){
    console.log(data,"from display function") 
    //Creation of elements
    var card = document.createElement("div")
    card.setAttribute("class","card")
    var cardBody = document.createElement("div")
    cardBody.setAttribute("class","card-body")
    var cardTitle = document.createElement("h5")
    cardTitle.textContent = userInput.value //Had to create this so that the name of the city would appear after the city was searched for. 
    cardTitle.setAttribute("class","card-title")
    var temp = document.createElement("p")
    temp.setAttribute("class","card-text")
    var humidity = document.createElement("p")
    humidity.setAttribute("class","card-text")
    var wind = document.createElement("p")
    wind.setAttribute("class","card-text")
    var uvi = document.createElement("p")
    uvi.setAttribute("class","card-text")
    var span = document.createElement("span")
    var icon = document.createElement("img")
    icon.setAttribute("src","https://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
    //Injection of data
    temp.textContent=`Temperature: ${data.temp}F`
    humidity.textContent=`Humidity: ${data.humidity}%`
    wind.textContent=`Wind Speed: ${data.wind_speed}MPH`
    uvi.textContent=`UVI: ${data.uvi}`
    //Append
    span.append(icon)
    cardTitle.append(span)
    cardBody.append(cardTitle,temp,humidity,wind,uvi)
    card.append(cardBody)
    mainWeather.append(card)

}




searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    //The 'e' stands for 'event'
    var city = userInput.value
    // var txt=$(this).siblings(".form-control").val() <--Look into this. 
    console.log(city);
    getWeather(city) //Calling the function and feeding it the city name

    // localStorage.setItem(city,txt); <--Look into this.
})

//Local Storage

// $("#userInput .form-control").val(localStorage.getItem("userInput")); <--Look into this.







  // for (var i = 0; i < data.length; i++){ 
    //   console.log(data[i]); //Whenever you do a for-loop, and do the console.log, it will ALWAYS be the (data[i])
    
    // // TODO: Loop through the response
    // // console.log(data[i].url);
    // // console.log(data[i]);
    // }
    // TODO: Console log each issue's URL and each user's login