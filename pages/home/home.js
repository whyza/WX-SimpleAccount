const util = require('../../utils/util.js')
var app = getApp();
const { $Message } = require('../../dist/iview/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    billId:"",
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    showSearch: false,
    modalName:"",
    scrollTop:0 ,
    deletevisable:false,
    delectaction: [
      {
        name: '取消'
      },
      {
        name: '删除',
        color: '#ed3f14',
        loading: false
      }
    ]
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
  onPageScroll: function (e) {//监听页面滚动
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      date: util.formatDate(new Date())
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
   
  },
  deletetap:function(e){
    this.setData({
      deletevisable: true,
      billId: e.currentTarget.dataset.billid
    });
  },
  deleteclick({ detail}) {
    if (detail.index === 0) {
      this.setData({
        deletevisable: false
      });
    } else {
      const action = [...this.data.delectaction];
      action[1].loading = true;
      this.setData({
        delectaction: action
      });
      setTimeout(() => {
        action[1].loading = false;
        this.setData({
          deletevisable: false,
          delectaction: action
        });
        $Message({
          content: '删除成功！'+this.data.billId,
          type: 'success'
        });
      }, 2000);
    }
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
})