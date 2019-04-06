/*
* @Author: Andy Hua
* @Date:   2018-12-29 20:52:19
* @Last Modified by:   Andy Hua
* @Last Modified time: 2019-04-04 21:00:42
*/
'use strict';
var path = require('path');
var webpack = require('webpack');
var Ex = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var WEBPACK_ENV = process.env.WEBPACK_ENV || '';
console.log(WEBPACK_ENV);


var getHtmlConfig = function(name, title) {
        return {
            filename: 'view/'+ name + '.html',
            template: './src/view/'+ name + '.html',
            inject: true,
            hash : true,
            chunks : ['common', name],
            title : title
        };
};

var config = {
    entry: {
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js'],
        'result': ['./src/page/result/index.js']    

    },
    output: {
        path: './dist', //文件存放路径
        publicPath : '/dist', //访问路径，如果不加上这个，浏览器访问空白
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
            {test: /\.string$/, loader: 'html-loader'}
        ]
    },
    resolve : {
        alias : {
            node_modules : __dirname + '/node_modules',
            util : __dirname + '/src/util',
            page : __dirname + '/src/page',
            service : __dirname + '/src/service',
            image : __dirname + '/src/image',
            util  : __dirname + '/src/util',
        }
    },
    plugins : [
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }) ,
        new Ex("css/[name].css"),
        new htmlWebpackPlugin(getHtmlConfig('index', '首页') ),
        new htmlWebpackPlugin(getHtmlConfig('login', '用户登录') ),
        new htmlWebpackPlugin(getHtmlConfig('result', '操作结果') )
    ]
};
if ('dev' === WEBPACK_ENV) {
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;