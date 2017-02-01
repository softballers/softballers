module.exports = {

  context: __dirname + '/client/src',
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + "/client/dist",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
      }
    ],
  }
};