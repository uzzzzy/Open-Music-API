const Server = require('./core/app');

new Server() //
  .rootDir(__dirname)
  .start();
