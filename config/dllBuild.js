require('shelljs/global')
const webpack = require('webpack');
const config = require('./index')
var utils = require('../build/utils')
rm('-rf', config.build.assetsRoot)
const vendors = [
    'vue',
    'vuedraggable',
    'lodash',
    '../src/styles/index.less',
    'element-ui',
    'element-ui/lib/theme-default/index.css'
];

var exports = {
    output: {
        path: config.project.dirPath + '/static',
        filename: '[name].[chunkhash].js',
        library: '[name]_[chunkhash]',
    },
    entry: {
        vendor: vendors,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.build.env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DllPlugin({
            path: config.project.dirPath + '/static/vendor.manifest.json',
            name: '[name]_[chunkhash]',
            context: config.project.dirPath,
        }),
    ],
    module: {
        loaders: utils.styleLoaders({sourceMap: config.build.productionSourceMap}),
    },

};
exports.module.loaders.push({
    test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
    loader: 'url',
    query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
    }
})
module.exports = exports