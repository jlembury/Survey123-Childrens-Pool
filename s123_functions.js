//Functions to return air temperature, weather condition, water temperature, and tide level to Survey123 form

/////////////////////
//WEATHER FUNCTIONS//
/////////////////////
function runWeatherCalcs(key) {

    //if (location===""){
    // return "";
    // }

    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=32.8474&lon=-117.2786&units=imperial&apikey=" + key;

    console.log(key);
    console.log(url);

    xmlhttp.open("GET", url, false);
    xmlhttp.send();

    if (xmlhttp.status != 200) {
        return "Error1"
    } else {
        var responseJSON = JSON.parse(xmlhttp.responseText)
        if (responseJSON.error) {
            return responseJSON.error;
        } else {

            if (responseJSON) {

                var city = responseJSON.name
                var weather = responseJSON.weather[0].main
                var wx_description = responseJSON.weather[0].description
                var weatherCode = responseJSON.weather[0].id
                var temperature = responseJSON.main.temp
                var min = responseJSON.main.temp_min
                var max = responseJSON.main.temp_max
                var humidity = responseJSON.main.humidity
                var pressure = responseJSON.main.pressure
                var windSpeed = responseJSON.wind.speed
                var windDegrees = responseJSON.wind.deg
                var windGust = responseJSON.wind.gust

                console.log(responseJSON.name)
                //console.log("JSON data:", responseJSON.stringify(json, undefined, 2));

                return responseJSON;
            }
            else {
                return "";
            }
        }
    }
}

//////////////
//WATER TEMP//
//////////////

function runWaterTemp() {
    //var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=9410230&product=water_temperature&datum=MSL&time_zone=lst_ldt&units=english&format=json";

    console.log(url);

    xmlhttp.open("GET", url, false);
    xmlhttp.send();

    if (xmlhttp.status != 200) {
        return "Error1"
    } else {
        var responseJSON = JSON.parse(xmlhttp.responseText)
        if (responseJSON.error) {
            return responseJSON.error;
        } else {

            if (responseJSON) {

                var waterTemp = responseJSON.data[0].v;
                return waterTemp;
            }
            else {
                return "";
            }

        }
    }

}

///////////////
//WATER LEVEL//
///////////////

function runWaterLevel() {
    //var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=9410230&product=water_level&datum=MSL&time_zone=lst_ldt&units=english&format=json";

    console.log(url);

    xmlhttp.open("GET", url, false);
    xmlhttp.send();

    if (xmlhttp.status != 200) {
        return "Error1"
    } else {
        var responseJSON = JSON.parse(xmlhttp.responseText)
        if (responseJSON.error) {
            return responseJSON.error;
        } else {

            if (responseJSON) {

                var waterLevel = responseJSON.data[0].v;
                return waterLevel;
            }
            else {
                return "";
            }

        }
    }

}
