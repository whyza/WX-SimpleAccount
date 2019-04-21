var app = getApp();
const util = require('../../utils/util.js')
const { $Message } = require('../../dist/iview/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo : "",
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleDefault() {
    console.log(123)
    $Message({
      content: '这是一条普通提醒'
    });
  },
  handleSuccess() {
    $Message({
      content: '这是一条成功提醒',
      type: 'success'
    });
  },
  handleWarning() {
    $Message({
      content: '这是一条警告提醒',
      type: 'warning'
    });
  },
  handleError() {
    $Message({
      content: '这是一条错误提醒',
      type: 'error'
    });
  },
  handleDuration() {
    $Message({
      content: '我将在 5 秒后消失',
      duration: 5
    });
  }
})