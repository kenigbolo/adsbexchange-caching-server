'use strict';

const axios = require('axios');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cache = require('./middleware/cache');
dotenv.config();

app.get('/*', cache(10), async (req, res) => {
  const apiUrl = `${process.env.BASE_URL}${req.url}`;
  axios.get(apiUrl).then((response) => {
    return res.send(response.data);
  }).catch((error) => {
    return res.send(error);
  });
});

const port = process.env.PORT || '8000';

app.listen(port, () => {
  console.log(`ADS-B Exchange caching server listening on port ${port}....`);
});
