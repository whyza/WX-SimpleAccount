//app.js
App({
  onLaunch: function () {
    wx.hideTabBar({
      aniamtion: false
    })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },

  globalData: {
    'uid':"",
    'hasUserInfo': false,
    'code': 1,
    'userInfo': null,
    'date':"",
    'current': "homepage",
  }

})