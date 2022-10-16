//Current Weather API 
var requestUrl = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={e97808d5796e4a020875da81441691e5}"
//^Receive error message in console. Ask Sara why that is? Why am I receiving a 404 error?
//^Received this from the OpenWeather email
// var apiKey = e97808d5796e4a020875da81441691e5



// var requestURL2 =

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Test \n----------');
    console.log(data);
    for (var i = 0; i < data.length; i++){ 
      console.log(data[i]); //Whenever you do a for-loop, and do the console.log, it will ALWAYS be the (data[i])
    
    // TODO: Loop through the response
    // console.log(data[i].url);
    // console.log(data[i]);
    }
    // TODO: Console log each issue's URL and each user's login
  });

