const path = require('path')
const webpack = require('webpack')

function pathResolve (url) {
    return path.resolve(__dirname, url)
}

module.exports = {
  devtool: 'inline-source-map',
  // 入口
  entry: [
    'react-hot-loader/patch',
    pathResolve('src/index.js')
  ],
  // 输出文件夹
  output: {
      path: pathResolve('./dist'),
      filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      'actions': pathResolve('./src/redux/actions'),
      'reducers': pathResolve('./src/redux/reducers')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: pathResolve('src')
      }
    ]
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    contentBase: pathResolve('./dist'),
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
