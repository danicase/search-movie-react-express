// app.js
require('./Constants');       // contains my Keys, file not in the repo. Delete this line or create Constants.js with your keys
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const api_helper = require('./API_helper');
// Create Express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: 'http://localhost:3000'
}
const CONFIG = {
  API_KEY: '?api_key=',
  base_url: 'https://api.themoviedb.org/3',
  urlOptions: {
    getConfig: '/configuration',
    getMovie: '/search/movie'
  },
  config: null
};
// set the key of the API from the environment or from 'Costants.js'
CONFIG.API_KEY += process.env.API_KEY || THEMOVIEDB_KEY

app.get('/', (req, res) => {
  res.send('Hello lovely')
})

app.get('/getConfig', cors(corsOptions), (req, res) => {
  if (CONFIG.config === null) {
    api_helper.make_API_call(CONFIG.base_url + CONFIG.urlOptions.getConfig + CONFIG.API_KEY)
      .then(response => {
        CONFIG.config = response;
        res.json(CONFIG.config)
      })
      .catch(error => {
        res.send(error)
      })
  } else res.json(CONFIG.config)
});

app.get('/search/:movie', cors(corsOptions), (req, res) => {
  api_helper.make_API_call(CONFIG.base_url + CONFIG.urlOptions.getMovie + CONFIG.API_KEY + '&query=' + req.params.movie)
    .then(response => {
      console.log(response);
      res.json(response)
    })
    .catch(error => {
      res.send(error)
    })
})
// Start the Express server
app.listen(4000, () => console.log('Server running on port 4000!'))  
