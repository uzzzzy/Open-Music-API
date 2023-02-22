const Server = require('./core/app');

new Server() // Create a new instance of the Server class
  .fireHttp() // Fire the HTTP server
  .start(); // Start the server
