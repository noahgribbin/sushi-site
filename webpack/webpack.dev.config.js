const HtmlWebpackPlugin =  require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
    filename: "main.css"
});
require('dotenv').config()
console.log(__dirname);
console.log(process.env);
const config = {
  entry:`${__dirname}/../index.js`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: extractSass.extract({
        fallback: "style-loader",
        use: [
          "css-loader",
          "sass-loader",

        ]
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({template: './index.html'}),
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(process.env.API_KEY)
    })
  ],
  node: {
  fs: 'empty'
}
};

module.exports = config;
