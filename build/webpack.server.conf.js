const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf.js')
var merge = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
  target: 'node',
  devtool: false,
  entry: './src/server-entry.js',
  output: Object.assign({}, baseWebpackConfig.output, {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  }),    
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ]
})
