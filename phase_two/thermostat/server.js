const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat');
const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  const temp = JSON.stringify({ temperature: thermostat.getTemperature() });
  
  res.send(temp)
})

app.get('/usage', (req, res) => {
  const usage = thermostat.usage();

  res.send(usage)
})

app.post('/up', (req, res) => {
  thermostat.up();
  res.send()
})

app.post('/down', (req, res) => {
  thermostat.down();
  res.send()
})

app.post('/psmoff', (req, res) => {
  thermostat.setPowerSavingMode(false);
  res.send()
})

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.send()
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);