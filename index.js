const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello World, Kumar");
});

app.get('/rk', (req, res) => {
  res.send("Hello rk");
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Port is run by Rohit on ${port}`);
  }
});
