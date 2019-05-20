let app = getApp()
var http = require('../../utils/request.js')

Page({
  data: {
    userInfo: {},
    hasUserInfo: false, //未授权不显示
    canIUse: wx.canIUse('button.open-type.getUserInfo'), //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    globalData: app.globalData.current,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },
  onLoad(option) {
    wx.hideTabBar({
      aniamtion: false
    })
    var self = this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        //用户已授权
        if (res.authSetting['scope.userInfo']) {
          self.queryUsreInfo(wx.getStorageSync("openId") || "")
        } else {
          // 用户没有授权
          // 改变 hasUserInfo 的值，显示授权页面
          self.setData({
            hasUserInfo: true
          });
        }
      }
    })
  },
  getUserInfo: function(e) {
    var that = this;
    if (e.detail.userInfo) {
      var userInfo = e.detail.userInfo;
      userInfo.userName = userInfo.nickName;
      //用户按了允许授权按钮
      that.setData({
        userInfo: userInfo
      })
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          userInfo.code = res.code;
          http.HttpRequst("POST", "userLoginByWeChat", userInfo, true, 0, function(res) {
            wx.setStorageSync("openId", res.data.data.open_id);
            that.queryUsreInfo(res.data.data.open_id);
          })
        }
      })

    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权'
      });
    }
  },
  queryUsreInfo: function(openId) {
    var that = this;
    var url = "queryUserInfoByOpenId";
    http.HttpRequst("POST", url, {openId}, true, 1, function(res) {
      app.globalData.userInfo = res.data.data;
      if (res.data.data != null && res.data.data != "") {
        wx.switchTab({
          url: "../../pages/home/home"
        })
        //授权成功后,通过改变 hasUserInfo 的值，让实现页面显示出来，把授权页面隐藏起来
        that.setData({
          hasUserInfo: false
        });
      } else {
        that.setData({
          hasUserInfo: true
        });
      }
    })
  }
})