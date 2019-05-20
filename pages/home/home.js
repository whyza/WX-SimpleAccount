const util = require('../../utils/util.js')
const app = getApp();
const http = require('../../utils/request.js')
import NumberAnimate from "../../utils/NummberAnimate";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: util.formatyearm(new Date()),
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
    ],
    sumincome: 0,
    sumpay: 0,
  },
  onShow: function() {
    let that = this;
    that.setData({
      enddate: util.formatyearm(new Date())
    })
    if (that.data.bill == null || that.data.bill == null == "") {
      that.selectBillByDateAndUid();
    }
  },
  selectBillByDateAndUid: function() {
    var qdate = util.getYearAndMonth(this.data.date)
    let url = "selectBillByDateAndUid";
    let that = this;
    http.HttpRequst("GET", url, {
      year: qdate[0],
      month: qdate[1],
      userId: app.globalData.userInfo.userId
    }, false, 1, function(res) {
      that.setData({
        bill: res.data
      })
      that.setpayincome(res);
    })
  },
  setpayincome: function(res) {
    var income = 0;
    var pay = 0;
    var payincome = [];
    var sumincome = 0;
    var sumpay = 0;
    for (var index in res.data) {
      for (var item in res.data[index].dateBills) {
        if (res.data[index].dateBills[item].accountTypeId == 1) {
          income = (res.data[index].dateBills[item].billMoney * 100 + income * 100) / 100;
        } else {
          pay = (res.data[index].dateBills[item].billMoney * 100 + pay * 100) / 100;
        }
      }
      sumincome = (income * 100 + sumincome * 100) / 100;
      sumpay = (sumpay * 100 + pay * 100) / 100;
      payincome.push([income, pay]);
      income = pay = 0;
    }
    var baseNumber = this.data.sumpay;
    this.setData({
      payincome: payincome,
      sumincome: sumincome,
      sumpay: sumpay
    })

    // let num1 = sumpay;
    // let n1 = new NumberAnimate({
    //   from: num1,//开始时的数字
    //   speed: 500,// 总时间
    //   refreshTime: 100,//  刷新一次的时间
    //   decimals: 2,//小数点后的位数
    //   onUpdate: () => {//更新回调函数
    //     this.setData({
    //       sumpay: n1.tempValue
    //     });
    //   }
    // });

    var that = this;
    var difference = sumpay - baseNumber //与原数字的差
    var absDifferent = Math.abs(difference) //差取绝对值
    var changeTimes = absDifferent < 6 ? absDifferent : 6 //最多变化6次
    var changeUnit = absDifferent < 6 ? 1 : Math.floor(difference / 6) //绝对差除以变化次数
    // 依次变化
    for (var i = 0; i < changeTimes; i += 1) {
      // 使用闭包传入i值，用来判断是不是最后一次变化
      (function(i) {
        setTimeout(() => {
          that.setData({
            sumpay: that.data.sumpay = (changeUnit * 100 + that.data.sumpay * 100) / 100
          })
          // 差值除以变化次数时，并不都是整除的，所以最后一步要精确设置新数字
          if (i == changeTimes - 1) {
            that.setData({
              sumpay: (baseNumber * 100 + difference * 100) / 100
            })
          }
        }, 50 * (i + 1))
      })(i)
    }
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
    this.selectBillByDateAndUid();
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