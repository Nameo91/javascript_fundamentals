const Thermostat = require('./thermostat');

describe('Thermostat',() => {
  it('returns default temperature', () => {
    const thermostat = new Thermostat();
    expect(thermostat.temp).toBe(20);
  });

  it('returns current temperatur', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('increase the temperature', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it('decreases the temperature', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it('returns the max temperature with power saving mode on',() => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('returns the max temperature with power saving mode off',() => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  });

  it('resets the thermostat', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 5 ; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
  
  it('returns the min temperature', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 13 ; i++) {
      thermostat.down();
    }

    expect(thermostat.getTemperature()).toBe(10);
  });

  it('returns the low energy usage', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    thermostat.down();

    expect(thermostat.usage()).toBe('Current temp: 17 degrees - low usage');
  });

  it('returns the medium energy usage', () => {
    const thermostat = new Thermostat();

    expect(thermostat.usage()).toBe('Current temp: 20 degrees - medium usage');
  });

  it('returns the high energy usage', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 6 ; i++) {
      thermostat.up();
    }

    expect(thermostat.usage()).toBe('Current temp: 26 degrees - high usage');
  });

})