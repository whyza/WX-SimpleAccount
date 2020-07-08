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
    Custom: app.globalData.Custom,
    synummber: 0,
    syysuan: 0,
    ysf:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function(options) {
    // queryBudget
    var that = this;
    var ysuan = 0;
    http.HttpRequst("get", "selectSumForMonth", {
      userId: app.globalData.userInfo.userId
    }, false, 0, function (res) {
      that.setData({
        ysf: res.data.data
      })
    })
    http.HttpRequst("POST", "queryBudget", {
      userId: app.globalData.userInfo.userId
    }, true, 1, function(res) {
      that.setData({
        budgetData: res.data
      })
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        for (var j = 0; j < res.data[i].budgetVoList.length; j++) {
          ysuan += res.data[i].budgetVoList[j].budgetNummber
        }
      }
      that.setData({
        syysuan: ysuan
      })
    })
  },
  tosetbudget: function(e) {
    app.globalData.icon = e.currentTarget.dataset.icon;
    app.globalData.accountclassifyname = e.currentTarget.dataset.accountclassifyname;
    wx.navigateTo({
      url: '../../pages/budget/budget?accid=' + e.currentTarget.dataset.accid,
    })
  },
  onLoad: function() {
    this.setData({
      synummber: util.synummber()
    })
  }
})