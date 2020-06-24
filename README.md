# Consuming an external API

See Matai 2020 Repo

Concepts
External APIs
componentDidMount and your api.js
Same-origin policy
Same scheme (http)
Same domain name (www.example.com)
Same port number (3000 or 80 or 443)
Consume for your server when CORS is not enabled
Create a route on your server
Consume the external API from your server
Consume your API endpoint from your components
Consuming an external API from your server

External APIs for you to try
https://github.com/public-apis/public-apis a LOT of APIs
http://wheretheiss.at/w/developer: get the lat/lon of the ISS
https://eda-te-reo.herokuapp.com: get Maori proverbs and translations
https://api.nasa.gov/api.html: a library of APIs from NASA
https://eonet.sci.gsfc.nasa.gov/docs/v2.1: the Earth Observatory
https://github.com/reedwade/metlink-api-maybe: unofficial api for Metlink in Wellington
https://docs.opencollective.com/help/developers/api: Open Collective API
https://alexwohlbruck.github.io/cat-facts/docs/: hobby project, but hey, it's cats.





# A starter webpack project for React

This is a starter project that uses webpack to transpile and bundle ES6 React code. To use, consider these steps:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

