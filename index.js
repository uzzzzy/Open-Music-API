const Server = require('./core/app');

new Server() // Create a new instance of the Server class
  .rootDir(__dirname)
  .start();
