# npm run dev
开发环境

# npm run test
测试环境

# npm run pro
线上环境

# npm run build:dev
开发打包

# npm run build:test
测试打包

# npm run build
线上打包

# ```project.config.js```配置webpack


```
module.exports = {
  projectName: 'pc', // 如果按照域名+项目名称访问 此处填写对应的项目名称

  env: process.env.ENV_CONFIG, // 项目运行环境

  isDevelopment, // webpack打包模式

  port: 3000, // 端口

  proxy: null, // 开发代理
  // proxy: { // 代理配置
  //   '/api': 'http://localhost:3000',
  //   changeOrigin: true
  // },

  entry: {
    main: './src/index.js' // 项目打包入口
  },

  staticPath: isDevelopment? '' : 'assets', // 静态文件存放目录

  outputDir: path.resolve(__dirname, 'dist'), // 打包输出文件夹

  publicPath: '/', // 输出解析文件的目录，url 相对于 HTML 页面

  // 外部资源模块（all是所有环境都会引入；dev/test/pro配置的会根据环境引入配置的资源）
  resources: {
    all: {
      js: [ 'www.all.com/js' ],
      css: [ 'www.all.com/css' ]
    },
    dev: {
      js: [ 'www.dev.com/js' ],
      css: [ 'www.dev.com/css' ]
    },
    test: {
      js: [ 'www.test.com/js' ],
      css: [ 'www.test.com/css' ]
    },
    pro: {
      js: [ 'www.pro.com/js' ],
      css: [ 'www.pro.com/css' ]
    }
  },

  // 修改html-webpack-plugin配置，默认配置如下
  html: {
    title: '框架界面', // 模版界面标题【默认值】
    template: path.resolve(__dirname, './public/index.html'), // 模版文件（全路径）【默认值】
    favicon: path.resolve(__dirname, './public/img/favicon.ico'), // html的favicon【默认值】
    inject: true,
    // cdn配置 注意scope为模块作用域命名
    cdn: [
      { name: 'vue', scope: 'Vue', js: 'http://www.xxxx.js' },
      { name: 'element-ui', scope: 'ELEMENT', js: 'http://www.element-ui-xxxx.js', css: 'http://www.element-ui-css.css' },
    ]
  },

  // 排除依赖项（排除element-ui依赖的js和css）
  externals: [
    function (context, request, cb) {
      if (/^element-ui/.test(request)) {
        return cb(null, 'commonjs ' + request)
      }
      cb()
    }
  ]

}
```
