'use strict';

var app = getApp();
Page({
  data: {
    title: '',
    iconSize: '45',
    isSign: false
  },
  onLoad: function onLoad(options) {
    wx.setNavigationBarTitle({
      title: '哈哈人'
    });
  },

  signIn: function signIn() {
    var that = this;
    this.setData({
      isSign: true
    });
  }
});