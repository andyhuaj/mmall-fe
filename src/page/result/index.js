/*
* @Author: Andy Hua
* @Date:   2019-04-04 20:44:33
* @Last Modified by:   Andy Hua
* @Last Modified time: 2019-04-04 22:03:20
*/
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function() {
  var type = _mm.getUrlParam('type') || 'default';
      $emlemt =  $('.' + type + '-success').show();

});