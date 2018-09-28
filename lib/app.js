const wind = require('./wind');
const loader = require('./loader');
module.exports = class Application {
  constructor(config) {
    const defaultConfig = {
      Port: 8888,
      env: 'dev'
    }
    this.config = Object.assign({}, defaultConfig, config);
  }
  run() {
    const config = this.config;
    loader.loadMiddleWare();
    console.log(`Server run at ${config.Port}`);
    wind.app.listen(config.Port || 8888)
  }
}