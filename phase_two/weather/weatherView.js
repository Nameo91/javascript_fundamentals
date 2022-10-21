
class WeatherView{
  constructor(apiData) {
    this.apiData = apiData; 
    this.response;
  }

  getData() {
    this.response = this.apiData.getWeatherData();
  }
  
  displayWeather() {
    const city = this.response.name;
    const weather = this.response.weather[0].main;
    const temp = this.response.main.temp;
    const feelsLike = this.response.main.feels_like;
    const humidity = this.response.main.humidity;
    
    const format = `City: ${city}\n` +
    `Weather: ${weather}\n` +
    `Temperature: ${temp}\n` +
    `Feels like: ${feelsLike}\n` +
    `Humidity: ${humidity}%`

    console.log(format);  
  }
}

module.exports = WeatherView;