/**
 * @description 常用文件夹路径
 */

 const path = require('path')
 
 //'..' 上一级目录
 const srcPath = path.join(__dirname,'..','src')
 const distPath = path.join(__dirname,'..','dist')

//  console.log('__dirname:',__dirname);   // .../webpack-demo/build-base-config
//  console.log('__filename:',__filename); // .../webpack-demo/build-base-config/path.js
//  console.log('srcPath:',srcPath);       // .../webpack-demo/src
//  console.log('distPath:',distPath);     // .../webpack-demo/dist

 module.exports = {
   srcPath,
   distPath
 }