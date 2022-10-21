class Weather {
  
  constructor(api) {
    this.api = api;
    this.response;
  }

  fetch(city) {
    this.api.fetchWeatherData(city, (response) => {
      this.response = response;
    })
  }

  getWeatherData() {
    return this.response;
  }
}

module.exports = Weather;
