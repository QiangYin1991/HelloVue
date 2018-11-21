module.exports = {
  entry: __dirname + "/helloworld/helloworld.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  mode: "development"
}