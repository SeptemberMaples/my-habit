//获取应用实例
var app = getApp()
Page({
  data:{
    title:'',
    iconSize: '45',
    isSign: false
  },
  onLoad:function(options){
    // 改变title
    wx.setNavigationBarTitle({
        title:'哈哈人'
    })
  },

  // 签到
  signIn(){
    var that = this
    this.setData({
      isSign: true
    })
  }

})