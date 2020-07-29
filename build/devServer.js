/*
 * @Author: PT
 * @Date: 2020-06-01 11:59:33
 * @LastEditors: PT
 * @LastEditTime: 2020-06-03 11:19:19
 * @Description: 开发webpack-dev-server配置
 */ 
const config = require('../project.config')

module.exports = config.isDevelopment ? {
  contentBase: config.outputDir,
  host: '0.0.0.0',
  port: config.port || 3000,
  hot: true, // 模块热替换
  historyApiFallback: true, // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
  compress: true,
  overlay: true, // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
  proxy: config.proxy || {},
  stats: {
    all: false,
    modules: false,
    errors: true,
    warnings: true,
    moduleTrace: true, // 显示警告/错误的依赖和来源
    version: true, // 添加 webpack 版本信息
    errorDetails: true// 添加错误的详细信息
  },
  useLocalIp: true,
  //watchOptions: {} // 模块改动通知设置（一般在项目比较大或电脑配置比较低的情况下配置），设置poll文件轮询时间、aggregateTimeout设置文件变更聚合到一次webpack重新构建的延迟时间
} : {}