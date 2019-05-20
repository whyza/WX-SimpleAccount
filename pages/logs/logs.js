const util = require('../../utils/util.js')
let app = getApp();
var http = require('../../utils/request.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function(options) {
    // queryBudget
    var that = this;
    http.HttpRequst("POST", "queryBudget", {
      userId: app.globalData.userInfo.userId
    }, true, 1, function(res) {
      that.setData({
        budgetData: res.data
      })
      // console.log(res.data)
    })
  },
  tosetbudget: function(e) {
    app.globalData.icon = e.currentTarget.dataset.icon;
    app.globalData.accountclassifyname = e.currentTarget.dataset.accountclassifyname;
    wx.navigateTo({
      url: '../../pages/budget/budget?accid=' + e.currentTarget.dataset.accid,
    })
  }
})