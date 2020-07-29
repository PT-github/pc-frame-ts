/*
 * @Author: PT
 * @Date: 2020-07-29 08:29:42
 * @LastEditors: PT
 * @LastEditTime: 2020-07-29 08:40:42
 * @Description: 系统添加外部扩展
 */ 
const HtmlWebpackPlugin = require('html-webpack-plugin')

class MyPlugin {
  constructor (options) {
    this.options = options
  }

  apply (compiler) {
    compiler.hooks.compilation.tap('MyPlugin', compilation => {
      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
        'MyPlugin',
        (data, cb) => {
          let options = this.options, all

          if (options) {
            let env
            options[process.env.ENV_CONFIG] && (env = options[process.env.ENV_CONFIG])
            data.assets.js = env && env.js && env.js.length > 0 ? env.js.concat(data.assets.js) : data.assets.js
            data.assets.css = env && env.css && env.css.length > 0 ? env.css.concat(data.assets.css) : data.assets.css

            options.all && (all = options.all)
            data.assets.js = all && all.js && all.js.length > 0 ? all.js.concat(data.assets.js) : data.assets.js
            data.assets.css = all && all.css && all.css.length > 0 ? all.css.concat(data.assets.css) : data.assets.css
          }
          cb(null, data)
        }
      )
    })
  }
}

module.exports = MyPlugin