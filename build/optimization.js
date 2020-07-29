/*
 * @Author: PT
 * @Date: 2020-06-01 15:45:55
 * @LastEditors: PT
 * @LastEditTime: 2020-06-04 09:38:50
 * @Description: optimization配置
 */ 
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  splitChunks: {
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        name: 'chunk-vendors',
        priority: -10,
        chunks: 'initial'
      },
      common: {
        name: 'chunk-common',
        minChunks: 2,
        priority: -20,
        chunks: 'initial',
        reuseExistingChunk: true
      }
    }
  },
  minimizer: [
    new TerserPlugin({
      test: /\.m?js(\?.*)?$/i,
      extractComments: false,
      sourceMap: true,
      terserOptions: {
        compress: {
          arrows: false,
          collapse_vars: false,
          comparisons: false,
          computed_props: false,
          hoist_props: false,
          inline: false,
          loops: false,
          negate_iife: false,
          properties: false,
          reduce_funcs: false,
          reduce_vars: false,
          switches: false,
          typeofs: false
        },
        mangle: {
          safari10: true
        }
      }
    }),
    new OptimizeCssAssetsWebpackPlugin({})
  ]
}