const HtmlWebpackPlugin =  require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path')

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
        test: /\.(css|scss)$/,
        use: {
          loader: 'sass-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};

module.exports = config;
