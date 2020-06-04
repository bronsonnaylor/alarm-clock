const { VueLoaderPlugin } = require('vue-loader')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  externals: [nodeExternals()],
  devtool: 'inline-cheap-module-source-map',
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: 'img/[name].[hash:8].[ext]'
          }
        ]
      }
    ]
  }
}