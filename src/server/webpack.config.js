const dev = process.env.NODE_ENV !== "production";
const path = require("path");

module.exports = {
  mode: dev ? "development" : "production",
  context: __dirname,
  devtool: dev ? "none" : "source-map",
  entry: {
    app: "../web/client.js"
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};
