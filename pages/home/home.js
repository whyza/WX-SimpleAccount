const util = require('../../utils/util.js')
const app = getApp();
const http = require('../../utils/request.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    delectaction: [{
        name: '取消'
      },
      {
        name: '删除',
        color: '#ed3f14',
        loading: false
      }
    ]
  },
  onShow: function() {
    let that = this;
    that.setData({
      date: util.formatDate(new Date())
    })
    if (that.data.bill == null || that.data.bill == null == "") {
      that.selectBillByDateAndUid();
    }
  },
  selectBillByDateAndUid: function() {
    let url = "selectBillByDateAndUid";
    let that = this;
    http.HttpRequst("GET", url, {
      year: "2019",
      month: "04",
      userId: app.globalData.userInfo.userId
    }, false, 1, function(res) {
      that.setData({
        bill:res.data
      })
      that.setpayincome(res);
    })
  },
  setpayincome:function(res){
    var income = 0;
    var pay = 0;
    var payincome = [];
    for (var index in res.data) {
      for (var item in res.data[index].dateBills) {
        if (res.data[index].dateBills[item].accountTypeId == 1) {
          income += res.data[index].dateBills[item].billMoney;
        } else {
          pay += res.data[index].dateBills[item].billMoney;
        }
      }
      payincome.push([income, pay]);
      income = pay = 0;
    }
    this.setData({
      payincome: payincome
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  onPageScroll: function(e) { //监听页面滚动
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  deletetap: function(e) {
  let that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除该账单吗?',
      success: function (res) {
        if (res.confirm) {
          http.HttpRequst("GET", "deleteBillById", {
            billId: e.currentTarget.dataset.billid
          }, false, 0, function (res) {
            if (!res.data.data) {
              wx.showToast({
                title: res.data.message,
                icon: 'warn',
                // duration: 1000,
                mask: true
              })
            }else{
              that.selectBillByDateAndUid();
            }
          })
        }
      }
    })
  },
  dateChange: function(e) {
    this.setData({
      date: e.detail.value
    });
  },
  showSearch() {
    this.setData({
      showSearch: !this.data.showSearch
    });
  },
  showDetail: function(e) {
    wx.navigateTo({
      url: '../../pages/billdetail/billdetail?billid=' + e.currentTarget.dataset.billid,
    })
  }
})