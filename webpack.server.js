const path = require('path');
const webConfig = require('./webConfig');
// const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  // production || development
  mode: webConfig.environment,

  // Inform webpack that we're building a bundle
  // for nodeJS, rather then for the browser
  target: 'node',

  entry: "./server.js",

  output: {
    filename: "server.js",
    path: path.resolve(__dirname, 'build'),
    libraryTarget: "commonjs2"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "build/client/media/[name].[ext]",
          publicPath: url => url.replace(/build\/client/, ""),
          emit: false
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader/locals"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  // Tell webpack not to bundle any libraries that exist in the 'node_modules' folder
  // into the server bundle
//   externals: [webpackNodeExternals()]
}
