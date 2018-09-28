const Koa = require('koa');
const utils = require('./utils')
global.wind = Object.create(utils);

wind.app = new Koa();

wind.app.wind = wind;

wind.controller = class Controller {
  constructor(ctx) {

  }
}

module.exports = wind;