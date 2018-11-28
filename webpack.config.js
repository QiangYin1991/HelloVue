const path = require('path');

module.exports = {
  entry: "./helloworld/helloworld.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js"
  },
  mode: "development"
}