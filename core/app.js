const Hapi = require('@hapi/hapi');

class Server {
  constructor() {
    this.server = Hapi.server({
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 5000,
    });
  }

  rootDir(rootDir) {
    this.rootDir = rootDir;

    return this;
  }

  async start() {
    const plugins = require(`${this.rootDir}/api`);

    for (const plugin of plugins) {
      const api = require(`${this.rootDir}/api/${plugin.name}`);
      const Service = require(`${this.rootDir}/services/${plugin.service}`);
      const Validator = require(`${this.rootDir}/validator/${
        plugin.validator || plugin.name
      }`);

      let config = {};

      config.plugin = api;
      config.options = {
        service: new Service(),
      };

      if (plugin.validator) {
        config.options.validator = Validator;
      }

      await this.server.register(config);
    }

    await this.server.start();

    // eslint-disable-next-line no-console
    console.log(`Server running at: ${this.server.info.uri}`);
  }
}

module.exports = Server;
