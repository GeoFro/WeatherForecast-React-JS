const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const API = '91525a419dbbd055bbb24eabdb8bac68';

app.listen(port, () => console.log(`Listening on port ${port}`));

/*
var request = require('request');
const weatherData = request('http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=91525a419dbbd055bbb24eabdb8bac68', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/

app.get('/api/hello', (req, res) => {
  res.send({ express: "Welcome to the weather app" });
});
