const fs = require('fs');
const path = require('path');
const wind = require('./wind');
const loadMiddleWare = () => {
  const middlewarePath = '../middleware';
  const middlewareFiles = fs.readdirSync(middlewarePath);
  middlewareFiles.forEach(v => {
    let middleware = require(path.join(middlewarePath, path.sep, v));
    if(wind.isFunction(middleware())) {
      wind.app.use(middleware());
      console.log('lallala', middleware)
    } else {
      
      console.log('not funciton')
    }
  })
}
module.exports  = {
  loadMiddleWare
}

