const util = require('../../utils/util.js')
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom

  },
  gotoWeek: function() {
    wx.navigateTo({
      url: '../../pages/charts/charts',
    })
  },
  gototest:function(){
    wx.navigateTo({
      url: '../../pages/addClassify/addClassify',
    })
  }
})