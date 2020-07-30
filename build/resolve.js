/*
 * @Author: PT
 * @Date: 2020-06-01 15:37:08
 * @LastEditors: PT
 * @LastEditTime: 2020-07-30 09:43:09
 * @Description: resolve配置
 */
const path = require('path')
const config = require('../project.config')
let { alias = {}, extensions = [] } = config.resolve || {}

module.exports = {
  alias: {
    // 'vue$': 'vue/dist/vue.runtime.esm.js',
    'vue$': 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname, '../src'),
    ...alias
  },
  extensions: [ ...extensions, '.ts', '.tsx', '.js', '.jsx', '.vue', '.json']
}