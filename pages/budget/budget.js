let app = getApp();
var http = require('../../utils/request.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    icon: "",
    nummber1:"0.0",
    nummber:"0.0",
    accountclassifyname: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      icon: app.globalData.icon,
      accountclassifyname: app.globalData.accountclassifyname
    })
    app.globalData.accountClassifyId = options.accid;
    http.HttpRequst("get", "queryUserBudget", {
      accountClassifyId: options.accid,
      userId: app.globalData.userInfo.userId
    }, true, 0, function(res) {
      that.setData({
        nummber: res.data.data,
        nummber1:res.data.data
      })
      app.globalData.budgetNummber = res.data.data
    })
  },
  onShow: function() {

  },
  back: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  bindInput: function(e) {
    this.setData({
      nummber: e.detail.detail.value
    })
  },
  updateubdget: function() {
    var that = this;
    http.HttpRequst("get", "queryUserBudget", {
      accountClassifyId: app.globalData.accountClassifyId,
      userId: app.globalData.userInfo.userId
    }, true, 0, function (res) {
     that.setData({
       budgetNummber :res.data.data
     })
    })
    var url = "";
    if (that.data.budgetNummber === 0) {
      url = "setUserBudget"
    } else {
      url = "updateUserBudget"
    }
    http.HttpRequst("POST", url, {
      accountClassifyId: app.globalData.accountClassifyId,
      userId: app.globalData.userInfo.userId,
      budgetNummber: that.data.nummber
    }, false, 0, function(res) {
      if (res.data.data) {
        wx.showToast({
          title: '设置成功',
          icon: 'success',
          duration: 1000,
          mask: true,
          success: function() {
            setTimeout(function() {
              that.back()
            }, 1000);
          }
        })
      } else {
        wx.showModal({
          title: '警告',
          content: "设置失败，请稍后重试",
          showCancel: false,
          confirmText: '确认'
        });
      }
    })
  }
})