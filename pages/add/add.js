var app = getApp();
const qiniuUploader = require("../../utils/qiniuUploader");
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var utilMd5 = require('../../utils/md5.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    billclassfyid: "",
    billclassfyName: "请选择分类",
    billclassfyImg: "",
    // img: "",
    imagepath: [],
    getLocation: false,
    address: "地址",
    token: '',
    notupload: true,
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
  },
  choseImage: function() {
    if (this.data.notupload) {
      var that = this;
      wx.chooseImage({
        count: 3,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          const tempFilePaths = res.tempFilePaths;
          wx.showLoading({
            title: '正在上传...',
            icon: 'loading'
          })
          for (var i = 0; i < tempFilePaths.length; i++) {
            //七牛上传
            qiniuUploader.upload(tempFilePaths[i], (res) => {
              that.setData({
                imagepath: that.data.imagepath.concat(res.fileUrl),
                notupload: false
              });
            }, (error) => {
              console.log('error: ' + error);
            }, {
              region: 'ECN',
              domain: app.globalData.ImageUrl,
              uptokenURL: app.globalData.URL + '/getToken',
            }, (res) => {
              if (res.progress == "100" && i >= tempFilePaths.length) {
                setTimeout(function() {
                  wx.hideLoading();
                }, 1000);
              }
            }, (err) => {
              // `complete` 上传接受后执行的操作(无论成功还是失败都执行)
            });
          }
        }
      })
    } else {
      wx.showToast({
        title: '只能上传一张图片',
        icon: 'error'
      })
    }

  },
  removeImage: function() {
    this.setData({
      imagepath: [],
      notupload: true
    })
  },
  handleImagePreview(e) {
    var idx = e.target.dataset.idx
    var images = this.data.imagepath
    wx.previewImage({
      current: images[idx], //当前图片地址
      urls: images
    })
  },
  choseBillType: function() {
    wx.navigateTo({
      url: '../../pages/billtype/billtype',
    })
  },
  back: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  changeSwitch: function(event) {
    this.setData({
      getLocation: event.detail.value
    })
    if (this.data.getLocation) {
      var that = this
      // 实例化腾讯地图API核心类
      // var qqmapsdk = new QQMapWX({
      //   key: 'NQABZ-OSSLQ-CLR5M-GTW3K-FH34T-PGFXJ' // 必填
      // });
      wx.chooseLocation({
        success: function(res) {
          //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
          // qqmapsdk.reverseGeocoder({
          //   location: {
          //     latitude: res.latitude,
          //     longitude: res.longitude
          //   },
          //   success: function (addressRes) {
          //     var address = addressRes.result.formatted_addresses.recommend;
          //     that.setData({
          //       address:address
          //     })
          //   }
          // })
          that.setData({
            address: res.address
          })
        },
        cancel: function() {
          that.setData({
            getLocation: false
          })
        }
      })
    } else {
      this.setData({
        address: "地址"
      })
    }
  }
})