const Weather = require('./weather');

describe('Weather', () => {
  it('gets the weather data fetched by the Api class', (done) => {
    const mockedApi = {
      fetchWeatherData: (_, cb) => {
        const mockData = { name: 'London' }
        cb(mockData);
      },
    };

    const weather = new Weather(mockedApi);
    weather.fetch('London');
    
    setTimeout(() => {
      const weatherData = weather.getWeatherData();
      expect(weatherData.name).toEqual('London');
      done();
    }, 0);
  });

  it('gets the weather data fetched by the Api class', (done) => {
    const mockedApi = {
      fetchWeatherData: (_, cb) => {
        const mockData = { name: 'Bristol' }
        cb(mockData);
      },
    };

    const weather = new Weather(mockedApi);
    weather.fetch('Bristol');

    setTimeout(() => {
      const weatherData = weather.getWeatherData();
      expect(weatherData.name).toEqual('Bristol');
      done();
    }, 0);   
  });
});