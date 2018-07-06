const HtmlWebpackPlugin =  require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
    filename: "main.css"
});
require('dotenv').config()
console.log('dev', __dirname);
const config = {
  entry:`${__dirname}/../src/index.js`,
  output: {
    path: path.resolve(`${__dirname}/..`, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
           presets: ['env', 'react'],
           plugins: [require('babel-plugin-transform-object-rest-spread')]
         }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      // {
      //   test: /\.svg$/,
      //   use:{
      //     loader: 'svg-inline-loader'
      //   }
      // },
      {
        test: /\.(png|jpg|svg|otf)$/,
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
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(process.env.API_KEY)
    })
  ],
  node: {
  fs: 'empty'
}
};

module.exports = config;
