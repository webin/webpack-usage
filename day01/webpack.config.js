module.exports = {
  context: __dirname + '/app',
  entry: {
    page1: './page',
    page2: ['./entry', './otherEntry']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]_bundle_[chunkhash:8]_[hash].js'
  }
}