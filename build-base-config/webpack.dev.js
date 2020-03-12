const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { smart } = require('webpack-merge')
const { srcPath, distPath } = require('./path')

module.exports = smart(webpackCommonConf,{
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    //DefinePlugin 允许创建一个在编译时可以配置的全局常量。这可能会对开发模式和发布模式的构建允许不同的行为非常有用
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development')
    })
  ],
  devServer: {
    port: 8000,
    progress: true,  // 显示打包的进度条
    contentBase: distPath,  // 根目录
    open: true,  // 自动打开浏览器
    compress: true,  // 启动 gzip 压缩

    // 设置代理
    proxy: {
        // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
        '/api': 'http://localhost:3000',

        // 将本地 /api2/xxx 代理到 localhost:3000/xxx
        '/api2': {
            target: 'http://localhost:3000',
            pathRewrite: {
                '/api2': ''
            }
        }
    }
  }
})