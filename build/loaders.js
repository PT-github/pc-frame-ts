/*
 * @Author: PT
 * @Date: 2020-06-01 15:50:32
 * @LastEditors: PT
 * @LastEditTime: 2020-07-30 09:08:57
 * @Description: webpack的rules配置
 */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const tsImportPluginFactory = require('ts-import-plugin')
const camel2Dash = require('camel-2-dash')
const config = require('../project.config')


let baseLoader = [
  config.isDevelopment ? {
    loader: 'vue-style-loader',
    options: {
      sourceMap: true,
      shadowMode: false
    }
  } : {
      loader: MiniCssExtractPlugin.loader,
      options: {

      }
    },
  {
    loader: 'css-loader',
    options: {
      sourceMap: config.isDevelopment,
      importLoaders: 2
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: config.isDevelopment,
      plugins: [
        require('autoprefixer')()
      ]
    }
  }
]

module.exports = [
  /* config.module.rule('eslint') */
  {
    enforce: 'pre',
    test: /\.(vue|(j|t)sx?)$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      {
        loader: 'eslint-loader',
        options: {
          extensions: ['.js', '.jsx', '.vue'],
          cache: true,
          emitWarning: true,
          emitError: false,
          formatter: undefined
        }
      }
    ]
  },
  /* config.module.rule('js') */
  {
    test: /\.jsx?$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/babel-loader')
        }
      },
      'babel-loader'
    ]
  },
  /* config.module.rule('vue') */
  {
    test: /\.vue$/,
    use: [
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/vue-loader')
        }
      },
      {
        loader: 'vue-loader',
        options: {
          cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/vue-loader')
        }
      }
    ]
  },
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'element-ui',
              libraryDirectory: 'lib',
              camel2DashComponentName: true,
              style: (_path) =>
                path.join('element-ui', 'lib', 'theme-chalk', `${
                  camel2Dash(path.basename(_path, '.js'))}.css`),
            })]
          }),
          compilerOptions: {
            module: 'es2015'
          },
          appendTsSuffixTo: [/\.vue$/],
        }
      }
    ]
  },
  /* config.module.rule('images') */
  {
    test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 4096, // 4KB
          esModule: false,
          fallback: {
            loader: 'file-loader',
            options: {
              name: path.posix.join(config.staticPath, 'img/[name].[hash:8].[ext]')
            }
          }
        }
      }
    ]
  },
  /* config.module.rule('fonts') */
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        }
      }
    ]
  },
  /* config.module.rule('svg') */
  {
    test: /\.(svg)(\?.*)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  /* config.module.rule('media') */
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 4096,
          esModule: false,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'media/[name].[hash:8].[ext]'
            }
          }
        }
      }
    ]
  },
  /* config.module.rule('css') */
  {
    test: /\.css$/,
    use: baseLoader
  },
  /* config.module.rule('less') */
  {
    test: /\.less$/,
    use: [
      ...baseLoader,
      {
        loader: 'less-loader',
        options: {
          sourceMap: config.isDevelopment
        }
      },
      {
        loader: 'style-resources-loader',
        options: {
          patterns: [
            path.resolve(__dirname, '../src/assets/less/_handle.less')
          ]
        }
      }
    ]
  },
  /* config.module.rule('scss') */
  {
    test: /\.(sa|sc)ss$/,
    use: [
      ...baseLoader,
      {
        loader: 'sass-loader',
        options: {
          sourceMap: config.isDevelopment
        }
      },
      {
        loader: 'style-resources-loader',
        options: {
          patterns: [
            path.resolve(__dirname, '../src/assets/scss/_handle.scss')
          ]
        }
      }
      // {
      //   loader: 'sass-resources-loader',
      //   options: {
      //     resources: path.resolve(__dirname, '../src/assets/scss/_handle.scss')
      //   }
      // }
    ]
  }
]