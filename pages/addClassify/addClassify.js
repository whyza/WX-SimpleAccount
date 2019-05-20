let app = getApp();
let http = require('../../utils/request.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    classifyName: "",
    currentTab: 0,
    choseicon: "iconhongbao2"
  },
  bindInputRemark: function(e) {
    this.setData({
      classifyName: e.detail.detail.value
    })
  },
  back: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  choseIcon: function(e) {
    this.setData({
      choseicon: e.currentTarget.dataset.icon,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    http.HttpRequst("POST", "getIcon", {}, true, 0, function(res) {
      that.setData({
        icon: res.data
      })
      app.globalData.icon = res.data;
    })
  },
  addClassify: function() {
    var that = this;
    var data = {
      icon: that.data.choseicon,
      classfyName: that.data.classifyName,
      userId: app.globalData.userInfo.userId,
      classifyType: app.globalData.classifyType
    };
    if (that.data.classifyName === "" || that.data.classifyName == null) {
      wx.showModal({
        title: '警告',
        content: "分类名称不能为空",
        showCancel: false,
        confirmText: '确认'
      });
    } else {
      http.HttpRequst("POST", "addClassify", data, true, 0, function(res) {
        if (res) {
          that.back()
        }else{
          wx.showToast({
            title: '添加失败',
            icon: 'loading',
            duration: 2000
          })
        }
      })
    }

  }
})