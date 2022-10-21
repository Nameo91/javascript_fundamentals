const express = require('express');
const app = express();
const port = 3000;
const Counter = require('./counter');
const counter = new Counter();


app.get('/', (req, res) => {
  res.send("Welcome to Counter")
});

app.post('/counter', (req, res) => {
  counter.up();
  res.send()
})

app.get('/counter', (req, res) => {
  result = counter.getSum();
  res.send(`${result}`)
})

app.delete('/counter', (req, res) => {
  counter.reset();
  res.send()
})

console.log(`Server listening on localhost: ${port}`);
app.listen(port);