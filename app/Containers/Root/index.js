/* eslint-disable global-require, import/no-unresolved */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod');
} else {
  module.exports = require('./Root.dev');
}
/* eslint-enable global-require */
