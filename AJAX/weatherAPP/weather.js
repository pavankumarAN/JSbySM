"use strict";

var searchButton = document.querySelector('button');
var seachCity = document.querySelector('#city');
var apiKey = 'caca04006a4b9ffb2e484e8b7fa30901';


var http = new XMLHttpRequest();

var url = 'http://history.openweathermap.org/data/2.5/history/city?q=' + seachCity + '&units=metricappid=' +apiKey;
var method = 'GET';
 if(seachCity.length>0) { 
    http.open(method,url);

    http.onreadystatechange = function() {
        if(http.readyState===XMLHttpRequest.DONE && http.status===200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new WeatherDetails(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            console.log(weatherData);
        
        }
        else if(http.readyState===XMLHttpRequest.DONE ) {
            console.log("Error")
            return false;
        } 
        http.send();
    }
 }
else {
    alert("Please enter the city name");
    //return false; 
} 


function WeatherDetails(cityName,description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';
}
Object.defineProperty(WeatherDetails.prototype, 'temperature', {
    get : function() {
        return this._temperature;
    },
    set : function(value) {
        return this._temperature = (value * 1.8 +32).toFixed(2) + 'F.';
    }
});
