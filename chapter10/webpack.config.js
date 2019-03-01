const path = require('path');

const config = {
  entry: {
    main: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'main.js'
  },
  mode: "development",
};

module.exports = config;