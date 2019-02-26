require('./lib/passport');
require('./lib/middleware');
require('./lib/api');
require('./lib/crypt');

var Login = require('./lib/Login');

module.exports = new Login();

export { default as LoginComponent } from './components/Login'