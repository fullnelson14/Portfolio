const path = require("path");
const WebpackOnBuildPlugin = require("on-build-webpack");
const shell = require("shelljs");

module.exports = {
  mode: "development",
  entry: "./app/src/js/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "app/dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /.jpg$/,
        use: ["file-loader"]
      },
      {
        test: /.pug$/,
        use: ["raw-loader"]
      }
    ]
  },
  plugins: [
    new WebpackOnBuildPlugin(stats => {
      shell.exec("npm run gulp");
    })
  ]
};
