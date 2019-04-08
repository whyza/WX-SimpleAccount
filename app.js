//app.js
App({
  onLaunch: function () {
    wx.hideTabBar({
      aniamtion: false
    })
  },

  globalData: {
    'hasUserInfo': false,
    'code': 1,
    'userInfo': null,
    'date':"",
    'current': "homepage",
  }

})