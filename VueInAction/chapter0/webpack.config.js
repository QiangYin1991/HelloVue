const path = require('path');

module.exports = {
  entry: './src/helloworld.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  mode: "development",
  // module:{
  //   rules:[
  //     {
  //       test: /\.js$/,
  //       loader: "babel-loader",
  //       exclude: /node_modules/
  //     }
  //   ]
  // },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}