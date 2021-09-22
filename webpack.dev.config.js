const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function pathResolve (url) {
    return path.resolve(__dirname, url)
}

module.exports = {
  devtool: 'inline-source-map',
  // 入口
  entry: {
    app: [
      'react-hot-loader/patch',
      pathResolve('src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  // 输出文件夹
  output: {
      path: pathResolve('./dist'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[chunkhash:5].chunk.js'
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
    })
  ],
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    contentBase: pathResolve('./dist'),
    historyApiFallback: true,
  }
}
