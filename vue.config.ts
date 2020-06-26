// const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
import StylelintWebpackPlugin from 'stylelint-webpack-plugin'

export default {
  publicPath: './',
  outputDir: 'vue',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      new StylelintWebpackPlugin({
        files: ['**/*.{ html, vue, css, less}'],
        fix: true,
        cache: true,
        emitError: true,
        failOnError: false
      })
    ]
  },
  css: {
    loaderOptions: [{
      test: /\.less$/,
      use: [{
        loader: 'less-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  }
}
