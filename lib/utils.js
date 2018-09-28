// const logger = require('logger')
module.exports = {
  isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
  }
}