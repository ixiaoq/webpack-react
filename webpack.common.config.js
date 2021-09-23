const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function pathResolve (url) {
    return path.resolve(__dirname, url)
}

const commonConfig = {
  // 入口
  entry: {
    app: [
      pathResolve('src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  // 输出文件夹
  output: {
      path: pathResolve('./dist'),
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].[chunkhash:5].chunk.js',
      publicPath : '/',
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      'actions': pathResolve('./src/redux/actions'),
      'reducers': pathResolve('./src/redux/reducers'),
      'mock': pathResolve('mock')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: pathResolve('src')
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: pathResolve('src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
}

module.exports = commonConfig
