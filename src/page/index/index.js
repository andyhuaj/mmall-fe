'use strict';
// var $$ = require('jquery');
// $$('body').html('HELL INDEX  33');
// console.log('hello index');
// require('./index.css');
// require('../module.js');
// var _mm = require('../../util/mm.js');

require('page/common/header/index.js');
require('page/common/nav/index.js');
var navSide =  require('page/common/nav-side/index.js');


var _mm = require('util/mm.js');
// navSide.initt({name : 'user-center'});
navSide.initt({name : 'order-list'});

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
// var html = '<div>{{data}}</div>';
// var data1 = {
//     data : 1236
// };
// console.log(_mm.renderHtml(html, data1));