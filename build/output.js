/*
 * @Author: PT
 * @Date: 2020-06-01 11:47:02
 * @LastEditors: PT
 * @LastEditTime: 2020-07-29 08:42:54
 * @Description: webpack output 配置
 */
const config = require('../project.config')
module.exports = config.isDevelopment ? {
  filename: '[name].js',
  path: config.outputDir, // 打包输出文件夹
  publicPath: '/' // 针对打包出来js/image或其他静态文件资源引入html时的前缀，多数情况下以/结束
} : {
    filename: 'js/[name].[hash:7].js',
    path: config.outputDir,
    publicPath: config.projectName ? config.publicPath + '/' + config.projectName + '/' : '/'
  }