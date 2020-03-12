const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath,distPath }  = require('./path')

module.exports = {
  entry: path.join(srcPath,'index'),
  module:{
    rules: [
      {
        test: /\.js$/,
        // babel-loader
        loader: ['babel-loader'],
        include: srcPath,
        exclude:/node_modules/
      },
      {
        test: /\.css$/,
        // loader 的执行顺序是：从后往前
        // postcss-loader 还需要一个postcss.config.js配置文件
        // style-loader 对比build-min-extract-css
        // css-loader
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: path.join(srcPath, 'index.html'),
      filename: 'index.html'
    })
  ]
}