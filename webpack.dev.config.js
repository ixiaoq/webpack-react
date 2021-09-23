const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const commonConfig = require('./webpack.common.config.js')

function pathResolve (url) {
  return path.resolve(__dirname, url)
}

const devConfig = {
  devtool: 'inline-source-map',
  // 入口
  entry: {
    app: [
      'react-hot-loader/patch',
      pathResolve('src/index.js')
    ]
  },
  // 输出文件夹
  output: {
      filename: '[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader"]
      }
    ]
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    contentBase: pathResolve('./dist'),
    historyApiFallback: true,
    proxy: {
      '/api/*': 'http://localhost:8090/$1'
    }
  }
}

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);
