const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
const shell = require('shelljs')
const prod = process.env.npm_lifecycle_event
shell.cp(`./src/configs/${prod}.js`, './src/configs/index.js')
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    devtool: 'cheap-module-source-map',
    devtool: 'source-map',
  },
}
