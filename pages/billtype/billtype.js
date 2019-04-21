let app = getApp()
var http = require('../../utils/request.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    billClassfy: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    http.HttpRequst("GET", "queryAllBillClassfy", null, true, 1, function(res) {
      that.setData({
        billClassfy: res.data
      })
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  back: function() {
    wx.navigateBack({
      delta: 2
    })
  },
  navigator: function(e) {
    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面
    prevPage.setData({//直接给上移页面赋值
      billclassfyid: e.currentTarget.dataset.billclassfyid,
      billclassfyName: e.currentTarget.dataset.name,
      billclassfyImg: e.currentTarget.dataset.img
    });
    wx.navigateBack({
      delta: 1
    })
    // wx.navigateBack({
    //   url: '../../pages/add/add?billClassfyId=' + e.currentTarget.dataset.billclassfyid + '&billClassfyName' + e._relatedInfo.anchorRelatedText
    // })
  }
})