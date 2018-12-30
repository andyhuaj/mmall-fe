/*
* @Author: Andy Hua
* @Date:   2018-12-29 20:52:19
* @Last Modified by:   Andy Hua
* @Last Modified time: 2018-12-30 14:44:25
*/
'use strict';
var path = require('path');
var webpack = require('webpack');
var Ex = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var WEBPACK_ENV = process.env.WEBPACK_ENV || '';
console.log(WEBPACK_ENV);


var getHtmlConfig = function(name) {
        return {
            filename: 'view/'+ name + '.html',
            template: './src/view/'+ name + '.html',
            inject: true,
            hash : true,
            chunks : ['common', name]
        };
};

var config = {
    entry: {
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js']    

    },
    output: {
        path: './dist',
        publicPath : '/dist',
        filename: 'js/[name].js'
    },
    externals : {
        'jquery' : 'window.jQuery'
    },
    module : {
        loaders: [
            {test : /\.css$/, loader: Ex.extract('style-loader', 'css-loader')},
            {test : /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader : "url-loader"},
            // {test: /\.html$/, loader: 'html-loader'}
        ]
    },
    plugins : [
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }) ,
        new Ex("css/[name].css"),
        new htmlWebpackPlugin(getHtmlConfig('index') ),
        new htmlWebpackPlugin(getHtmlConfig('login') ),
    ]
};
if ('dev' === WEBPACK_ENV) {
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;