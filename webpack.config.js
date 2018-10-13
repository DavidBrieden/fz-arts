const path = require('path');

module.exports = {
  entry: './source/client/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'wwwroot/build')
  }
};
