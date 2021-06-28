const express = require('express') // require the express package
const app = express() // initialize your express app instance
 
const cors = require('cors');
app.use(cors()) // after you initialize your express app instance

require('dotenv').config();
// a server endpoint 

// const axios = require('axios'); // require the package
const weatherData =require('../city-explorer-api/data/weather.json')

// // inside your callback function
// axios.get(url).then(response => response.data).catch(error => console.log(error));
app.get('/weaather', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.json(weatherData) // our endpoint function response
})
 
app.listen(8000) // kick start the express server to work