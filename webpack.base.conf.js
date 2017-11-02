var path = require('path')
var webpack = require('webpack')
var ip = require('ip')
var WebpackNotifierPlugin = require('webpack-notifier')
var glob = require('glob')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//环境标识
const isProd = process.env.NODE_ENV === 'production' ? true : false

//入口文件列表
let newEntries = glob.sync('./src/views/pages/*/main.js')
let entryArr = {}
newEntries.forEach(function (f) {
  let tArr = f.split('/')
  let name = tArr[tArr.length - 2]
  entryArr[name] = f
})
let entryKeys = Object.keys(entryArr)
let chunksArr = [], pluginsList = []

entryKeys.map(function (key) {
  chunksArr = ['common', key]
  key === 'index' ? viewUrl = 'index.html' : viewUrl = key + '/index.html'
  pluginsList.push(
    new HtmlWebpackPlugin({
      title: '标题',
      filename: viewUrl,
      template: './src/tpl/main.tpl.html',
      hash: false,
      chunks: chunksArr
    })
  )
})

module.exports = {
  entry: entryArr,
  output: {
    path: path.resolve(__dirname, isProd ? './dist' : './'),
    publicPath: isProd ? '/dist/' : '/',
    filename: isProd ? '[name]/build.js?[chunkhash:8]' : '[name]/build.js?[hash:8]',
    chunkFilename: isProd ? '[name].js?[chunkhash:8]' : '[name].js?[hash:8]'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    ...pluginsList,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: isProd ? '[name]/build.js?[chunkhash:8]' : '[name]/build.js?[hash:8]',
    }),
    new WebpackNotifierPlugin(),
    new webpack.ProvidePlugin({
      Vue: ['vue', 'default'],
      VueRouter: ['vue-router', 'default'],
      VueResource: ['vue-resource', 'default'],
      Vuex: ['vuex', 'default'],

      ElementUI: 'element-ui',

      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    })
  ],
  resolve: {
    alias: {
      //'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    host: ip.address(),
  },
  performance: {
    hints: false
  }
}
