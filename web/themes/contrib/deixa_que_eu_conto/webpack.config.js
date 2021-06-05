const path = require("path");
module.exports = {
  mode: "production",
  devtool: false,
  // entry: toObject(glob.sync("./assets/**/*.js*")),
  entry: {
    front: "./js-dev/main.js",
  },
  output: {
    path: path.resolve(__dirname, `./js`),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
