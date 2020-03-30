const path = require('path');
const webConfig = require('./webConfig');
// const autoprefixer = require("autoprefixer");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: webConfig.environment,

  entry: ['babel-polyfill', "./src/Client.js"],

  devtool: "cheap-module-source-map",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build', 'public')
  },

  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "build/public/media/[name].[ext]",
          publicPath: url => url.replace(/build\/public/, "")
        }
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.s?css$/
      },
      {
        test: /\.(js|jsx|mjs)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: path.resolve('src')
      }
    ]
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },

  //extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx']

}

