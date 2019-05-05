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
    billdetail: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let url = "queryBillDetailsById";
    let that = this;
    http.HttpRequst("POST", url, {
      billId: options.billid,
      userId: app.globalData.userInfo.userId
    }, true, 1, function(res) {
      that.setData({
        billdetail: res.data.data
      })
    })
  },
  back: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  delectBill: function(e) {
    wx.showModal({
      title: '提示',
      content: '确定要删除该账单吗?',
      success: function(res) {
        if (res.confirm) {
          http.HttpRequst("GET", "deleteBillById", {
            billId: e.currentTarget.dataset.billid
          }, false, 0, function(res) {
            if (!res.data.data) {
              wx.showToast({
                title: res.data.message,
                icon: 'warn',
                // duration: 1000,
                mask: true
              })
            } else {
              wx.switchTab({
                url: '../../pages/home/home',
              })
            }
          })
        }
      }
    })

  },
  //图片预览
  handleImagePreview(e) {
    let idx = e.target.dataset.idx
    let images = this.data.billdetail.billImages
    wx.previewImage({
      current: images[idx], //当前图片地址
      urls: images
    })
  },
  updateBill:function(){
    wx.navigateTo({
      url: '../../pages/add/add?isUpdate=true&billdetails=' + JSON.stringify(this.data.billdetail),
    })
  }
})