let app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false, //未授权不显示
    canIUse: wx.canIUse('button.open-type.getUserInfo'), //判断小程序的API，回调，参数，组件等是否在当前版本可用。
  },
  onLoad(option) {
    wx.hideTabBar({
      aniamtion: false
    })
    var self = this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // wx.getUserInfo({a
          //   success: res => {
          //     // 可以将 res 发送给后台解码出 unionId
          //     app.globalData.userInfo = res.userInfo
          //     // console.log(app.globalData.userInfo);
          //     // 登录
          //     wx.login({
          //       success: res => {
          //         // 发送 res.code 到后台换取 openId, sessionKey, unionId
          //         getApp().globalData.code = res.code;
          //         console.log(res.code)  //0239pWjX0lMARU1YMPjX0rL5kX09pWjN
          //         wx.request({
          //           url: 'https:xxxxxxxxxxxxxxxxxxxxxx',
          //           data: {
          //             'code': getApp().globalData.code,
          //           },
          //           method: 'POST',
          //           success: function(res) {
          //             getApp().globalData.uid = res.data.data.uid;
          //             console.log('uid====', getApp().globalData.uid);
          //           }
          //         })
          //       }
          //     })
          //   }
          // })
          wx.switchTab({
            url: "../../pages/home/home"
          })
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
    if (e.detail.userInfo) {
      console.log(e.detail.userInfo);
      //用户按了允许授权按钮
      //后端新增数据到数据库
      var self = this;
      //授权成功后,通过改变 hasUserInfo 的值，让实现页面显示出来，把授权页面隐藏起来
      self.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: false
      });
      wx.switchTab({
        url: "../../pages/home/home"
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {}
      });
    }
  }
})