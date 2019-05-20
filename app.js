//app.js
App({
  onLaunch: function() {
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
    multiArray:"",
    multiIndex: [0, 0],
    accarray:"",
    accoenarray:"",
    acctwoarray:"",
    // clasop'we
    uid: "",
    hasUserInfo: false,
    code: 1,
    userInfo: null,
    date: "",
    current: "homepage",
    // URL: 'http://localhost:8081/',
    URL: 'https://iazuresky.com:8443/',
    ImageUrl: 'https://iazuresky.com'
  },
  /**
   * 封装wx.request请求
   * method： 请求方式
   * url: 请求地址
   * data： 要传递的参数
   * callback： 请求成功回调函数
   * errFun： 请求失败回调函数
   **/
  wxRequest(method, url, data, callback, errFun) {
    wx.request({
      url: url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      dataType: 'json',
      success: function(res) {
        callback(res);
      },
      fail: function (err) {
        errFun(res);
      }
    })
  }
})