/*
 * @Author: PT
 * @Date: 2020-06-01 15:47:39
 * @LastEditors: PT
 * @LastEditTime: 2020-06-03 11:18:24
 * @Description: performance
 */ 
const config = require('../project.config')

module.exports = config.isDevelopment ? { // 这些选项可以控制 webpack 如何通知「资源(asset)和入口起点超过指定文件限制」
  hints: false // 开发推荐关闭 生产推荐 error
} : {}