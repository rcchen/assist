const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: './src/init.tsx'
  },
  output: {
    filename: './build/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ],
  }
}
