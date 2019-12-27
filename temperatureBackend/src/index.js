const {server} = require("./server");
const axios = require('axios');

const appIdOpenWeatherMap = "01ebadfec7c7d5d219287c671877540c";

server.get("/temperature", function(req, res){
    if(req.query.city){
        console.log("city")
        getTemperatureByCity(req.query.city).then(temperature => {
            console.log(temperature);
            res.json({ temp: temperature})
        });
    }else if(req.query.lat && req.query.lon){
        console.log("lat lon")
        getTemperatureByLatlon(req.query.lat, req.query.lon).then(temperature => {
            console.log(temperature);
            res.json({ temp: temperature})
        });
    }
});

function getTemperatureByCity(city){
    console.log("temp city")

    return axios.get('http://api.openweathermap.org/data/2.5/weather?q='
                        +city+'&units=metric&appid='+appIdOpenWeatherMap)
        .then(function (response) {
            return response.data.main.temp;
        })
        .catch(function (error) {
            // TODO getting last temp availaible in database
            console.log(error);
        });
}

function getTemperatureByLatlon(lat, lon){
    console.log("temp lat lon")

    return axios.get('http://api.openweathermap.org/data/2.5/weather?lat='
                        +lat+'&lon='+lon+'&units=metric&appid='+appIdOpenWeatherMap)
        .then(function (response) {
            return response.data.main.temp;
        })
        .catch(function (error) {
            // TODO getting last temp availaible in database
            console.log(error);
        });
}