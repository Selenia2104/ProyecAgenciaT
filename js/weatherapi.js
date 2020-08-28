let weatherRequest = new XMLHttpRequest();

//URL http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
//APIKEY: c2f1a30c08bf1465f982f10da498c31a
// Preston id: 5604473
let apiURLstring = 'http://api.openweathermap.org/data/2.5/weather?lat=-19.5892&lon=-65.7538&units=metric&APPID=0340b8106f9edcecd91d017daed08c77'

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

/*To wait for the request object to load, use the onload method to to encase 
the JSON parser and output statements in a generic function OR use an 
addEventListener using the load parameter. */

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('cc-temp').innerHTML = weatherData.main.temp;

    let icon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png";
    let desc = weatherData.weather[0].description;

    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);

}