const path = require('path');
module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/build/',
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'app/'),
        ],
        test: /\.jsx?$/,
        query: {presets: ['latest', 'react', 'stage-2']},
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: [
          path.resolve(__dirname, 'public'),
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: [
          path.resolve(__dirname, 'public'),
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?limit=8192',
        include: [
          path.resolve(__dirname, 'public'),
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
