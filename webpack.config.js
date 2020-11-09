const dotenv = require("dotenv");
const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

dotenv.config({ path: path.join(__dirname, '.env') });

const { PORT_WEBPACK } = process.env;

module.exports = {
  devServer: {
    port: PORT_WEBPACK
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/server/static/index.html", // creates html file in dist
      filename: "./index.html"
    })
  ]
};