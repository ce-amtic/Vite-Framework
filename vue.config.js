const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vite-framework-example/'
    : '/',
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    https: false,
    open: true
  },
})