/*
* @Author: Andy Hua
* @Date:   2019-04-01 22:00:20
* @Last Modified by:   Andy Hua
* @Last Modified time: 2019-04-04 20:20:27
*/
'use strict';
require('./index.css');
var _mm = require('util/mm.js');
var templateIndex = require('./index.string');

var navSide = {
   option : {
        name : '',
        navList : [
              {name : 'user-center', desc : '个人中心2', href : './user-center.html'},
              {name : 'order-list', desc : '我的订单2', href : './order-list.html'},
              {name : 'pass-update', desc : '修改密码', href : './pass-update.html'},
              {name : 'about', desc : '关于MMall', href : './about.html'}
              ]
             },
    initt : function(opt) {
        $.extend(this.option, opt);
      this.renderNav();
    },
    renderNav: function() {
        for (var i = 0, iLength = this.option.navList.length; i < iLength; i++) {
            // alert(this.option.name);
            if (this.option.navList[i].name === this.option.name) {
               this.option.navList[i].isActive = true;
            }
        };
        var navHtml = _mm.renderHtml(templateIndex, {
            navList : this.option.navList
        });
        $('.nav-side').html(navHtml);
    }
}

module.exports = navSide;
