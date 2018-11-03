'use strict';

const express = require('express');
const app = express();
const cache = require('./middleware/cache');

app.get('/*', cache(5), async (req, res) => {
  res.send(
    `Welcome to adsbexchange caching server. Your request url is ${req.url}`
  );
});

const port = process.env.PORT || '8000';

app.listen(port, () => {
  console.log(`ADS-B Exchange caching server listening on port ${port}....`);
});
