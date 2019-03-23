'use strict';
// var $$ = require('jquery');
// $$('body').html('HELL INDEX  33');
// console.log('hello index');
// require('./index.css');
// require('../module.js');
// var _mm = require('../../util/mm.js');
var _mm = require('util/mm.js');
// _mm.request({
//     url: '/product/list.do?keyword=i',
//     success : function(res) {
//         console.log(res);
//     },
//     error : function(errMsg){
//         console.log(res);
//     }
// });

// console.log(_mm.getUrlParam('test'));
var html = '<div>{{data}}</div>';
var data1 = {
    data : 123
};
console.log(_mm.renderHtml(html, data1));