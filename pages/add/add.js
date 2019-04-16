var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    current: 'tab1',
    current_scroll: 'tab1',
    nummber: "",
    date: "请选择日期",
    oneChecked: false,
    tags: [{
        name: '今天',
        checked: true,
        color: 'default'
      },
      {
        name: '昨天',
        checked: false,
        color: 'red'
      },
      {
        name: "前天",
        checked: false,
        color: 'blue'
      }
    ]
  },
  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
  },
  handleChangeScroll({
    detail
  }) {
    this.setData({
      current_scroll: detail.key
    });
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  onChange(event) {
    const detail = event.detail;
    // if (event.detail.name == "0") {
    //   this.setData({
    //     ['tags[0].checked']: detail.checked,
    //     ['tags[1].checked']: !detail.checked,
    //     ['tags[2].checked']: !detail.checked

    //   })
    // } else if (event.detail.name == "1") {
    //   this.setData({
    //     ['tags[1].checked']: detail.checked,
    //     ['tags[0].checked']: !detail.checked,
    //     ['tags[2].checked']: !detail.checked
    //   })
    // } else {
    //   this.setData({
    //     ['tags[2].checked']: detail.checked,
    //     ['tags[0].checked']: !detail.checked,
    //     ['tags[1].checked']: !detail.checked

    //   })
    // }


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})