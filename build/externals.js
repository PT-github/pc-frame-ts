/*
 * @Author: PT
 * @Date: 2020-07-29 08:20:07
 * @LastEditors: PT
 * @LastEditTime: 2020-07-29 08:20:07
 * @Description: externals 配置
 * 1.优先使用project.config.js中配置的externals外部扩展
 * 2.如果html中配置了cdn，添加外部扩展
 */ 
const config = require('../project.config')

let { externals } = config, cdnConfig = {}

if (config.html && config.html.cdn && config.html.cdn.length > 0) {
  config.html.cdn.forEach(({name, scope}) => {
    cdnConfig[name] = scope
  })
}

module.exports = externals || cdnConfig