const App = require('../lib/app');
const config = {
  env: 'dev'
}
const app = new App(config);

app.run();