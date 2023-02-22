const Hapi = require('@hapi/hapi');

class Server {
  constructor() {
    this.server = Hapi.server({
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 5000,
    });
  }

  async start() {
    await this.server.start();

    // eslint-disable-next-line no-console
    console.log(`Server running at: ${this.server.info.uri}`);
  }
}

module.exports = Server;
