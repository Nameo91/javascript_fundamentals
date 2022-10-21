const got = require('got');
const apiKey = require('./apiKey');

class WeatherApi{
  fetchWeatherData(city, callbackFn) {
    const apiURL = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    const responseHandler = (response) => {
      const repoData = JSON.parse(response.body);
      callbackFn(repoData);
    }
    got(apiURL).then(responseHandler);
  }
}

module.exports = WeatherApi;

