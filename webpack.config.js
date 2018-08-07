var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: "source-map",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },


  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          "raw-loader", // creates style nodes from JS strings
          "sass-loader" // compiles Sass to CSS
        ]
      }
    ]
  }
};