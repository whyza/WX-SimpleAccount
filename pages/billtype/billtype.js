let app = getApp()
let http = require('../../utils/request.js')

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
    // console.log(options.classifyType)
    let userId = app.globalData.userInfo.userId
    let that = this;
    http.HttpRequst("GET", "queryAllBillClassfy", { userId: userId, classifyType: options.classifyType }, true, 1, function(res) {
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
      delta: 1
    })
  },
  navigator: function(e) {
    let pages = getCurrentPages(); //当前页面
    let prevPage = pages[pages.length - 2]; //上一页面
    prevPage.setData({ //直接给上移页面赋值
      billclassfyid: e.currentTarget.dataset.billclassfyid,
      billclassfyName: e.currentTarget.dataset.name,
      billclassfyImg: e.currentTarget.dataset.img
    });
    if (prevPage.data.current == "tab1"){
      app.globalData.billclassfyid = e.currentTarget.dataset.billclassfyid;
      app.globalData.billclassfyName = e.currentTarget.dataset.name
      app.globalData.billclassfyImg = e.currentTarget.dataset.img
    } else if (prevPage.data.current == "tab2"){
      app.globalData.billclassfyid1 = e.currentTarget.dataset.billclassfyid;
      app.globalData.billclassfyName1 = e.currentTarget.dataset.name
      app.globalData.billclassfyImg1 = e.currentTarget.dataset.img
    }
    wx.navigateBack({
      delta: 1
    })
  }
})