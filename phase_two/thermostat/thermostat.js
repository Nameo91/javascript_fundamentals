class Thermostat{
  constructor() {
    this.temp = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    if (this.powerSavingMode && this.temp > 25) {
      return this.temp = 25;
    }
    else if (!this.powerSavingMode && this.temp >32) {
      return this.temp = 32;
    }
    else if (this.temp < 10 ) {
      return this.temp = 10;
    }
    else {
      return this.temp;
    }
  }

  up() {
    this.temp += 1;
  }

  down() {
    this.temp -= 1;
  }

  setPowerSavingMode(mode) {
    return this.powerSavingMode = mode;
  }

  reset() {
    return this.temp = 20;
  }
  
  usage() {
    if (this.getTemperature() < 18) {
      return `Current temp - ${this.temp} degrees - low usage`;
    }
    else if (this.getTemperature() <= 25) {
      return `Current temp - ${this.temp} degrees - medium usage`;
    }
    else {
      return `Current temp - ${this.temp} degrees - high usage`;
    }
  }
}

module.exports = Thermostat;