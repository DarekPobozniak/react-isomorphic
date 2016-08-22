var path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'src/clientRender'),
  output: {
    path: './public/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel'
      }
    ]
  }
};
