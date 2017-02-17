var config = require('../config')
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var devModule = process.argv[2];
var devPath = path.join('./src/', devModule + '.js')

// add hot-reload related code to entry chunks
/*Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})*/

module.exports = merge(baseWebpackConfig, {
    entry: {
        [devModule]: ['./build/dev-client', devPath]
    },
    module: {
        loaders: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },
    // eval-source-map is faster for development
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DllReferencePlugin({
            context: config.project.dirPath,
            manifest: require(path.resolve(config.build.assetsRoot, '../static/vendor.manifest.json')),
        }),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            chunks: [devModule],
            inject: true
        }),
        /*new HtmlWebpackPlugin({
            filename: 'show.html',
            template: 'index.html',
            chunks: ['show'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'action.html',
            template: 'index.html',
            chunks: ['action'],
            inject: true
        })*/

    ]
})
