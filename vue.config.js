module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://magazine.test.wujinhai.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
  publicPath: './',
  assetsDir: 'static',
}