'use strict';

var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  bindViewTap: function bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  gotoHandle: function gotoHandle(event) {
    console.log(event);
    wx.navigateTo({
      url: '../handle/handle'
    });
  },

  onLoad: function onLoad() {
    console.log('onLoad');
    var that = this;
  }
});