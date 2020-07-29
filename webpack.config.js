/*
 * @Author: PT
 * @Date: 2020-05-30 13:09:35
 * @LastEditors: PT
 * @LastEditTime: 2020-07-29 08:23:41
 * @Description: webpack构建文件
 */
const config = require('./project.config')

let webpack_config = {
  mode: process.env.ENV_MODE,
  entry: config.entry,
  output: require('./build/output'),
  devServer: require('./build/devServer'),
  devtool: config.isDevelopment ? 'cheap-module-eval-source-map' : '',
  module: {
    rules: require('./build/loaders')
  },
  plugins: require('./build/plugins'),
  resolve: require('./build/resolve'),
  optimization: require('./build/optimization'),
  performance: require('./build/performance'),
  stats: {
    modules: false,
    children: false
  },
  externals: require('./build/externals')
}
module.exports = webpack_config