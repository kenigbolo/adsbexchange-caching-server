# adsbexchange-caching-server

[![Build Status](https://travis-ci.org/kenigbolo/adsbexchange-caching-server.svg?branch=master)](https://travis-ci.org/kenigbolo/adsbexchange-caching-server)

To run this caching server in production you need to define an environment variable called `BASE_URL`. Also, to run locally, kindly ensure that you have a `.env` file in the root folder of the project. The `.env` file should define a `BASE_URL` environment variable set to the base URL the request should retrieve thier reponse from. This data is cached for 10 seconds by default based on the response sent. To change the caching number simply update the `cache(10)` argument of the get method in the index file to whichever amount of seconds are prefered e.g. for 20 seconds simply update to `cache(20)`.
