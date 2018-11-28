const path = require('path');

module.exports = {
  entry: "./helloworld/helloworld.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js"
  },
  mode: "development",
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}