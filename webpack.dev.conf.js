var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/vendor/vendor-manifest-dev.json')
        })
    ],
    devtool: '#eval-source-map'
})
