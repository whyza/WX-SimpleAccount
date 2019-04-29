let app = getApp();
const qiniuUploader = require("../../utils/qiniuUploader");
let http = require('../../utils/request.js')
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: "",
    multiIndex: [0, 0],
    billclassfyName: "请选择分类",
    imagepath: [],
    address: "",
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    current: 'tab1',
    nummber: "0.00",
    date: util.formatDate(new Date()),
    remarks: "",
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
  handleChange({detail}) {
    this.setData({
      current: detail.key
    });
    app.globalData.key = detail.key
    this.change();
  },
  //记录用户选择的分类
  change: function() {
    if (app.globalData.key == "tab2") {
      app.globalData.classifyType = 1
      this.setData({
        billclassfyid: app.globalData.billclassfyid1 || "",
        billclassfyName: app.globalData.billclassfyName1 || "请选择分类",
        billclassfyImg: app.globalData.billclassfyImg1 || ""
      })
    } else if (app.globalData.key == "tab1"){
      app.globalData.classifyType = 0;
      this.setData({
        billclassfyid: app.globalData.billclassfyid || "",
        billclassfyName: app.globalData.billclassfyName || "请选择分类",
        billclassfyImg: app.globalData.billclassfyImg || ""
      })
    }
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
    let that = this;
    wx.chooseImage({
      count: 4,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        wx.showLoading({
          title: '正在上传...',
          icon: 'loading'
        })
        for (let i = 0; i < tempFilePaths.length; i++) {
          //七牛上传
          qiniuUploader.upload(tempFilePaths[i], (res) => {
            that.setData({
              imagepath: that.data.imagepath.concat(res.fileUrl)
            });
          }, (error) => {
            console.log('error: ' + error);
          }, {
            region: 'ECN',
            domain: app.globalData.ImageUrl,
            uptokenURL: app.globalData.URL + '/getToken',
          }, (res) => {
            if (res.totalBytesSent == res.totalBytesExpectedToSend && i >= tempFilePaths.length - 1) {
              setTimeout(function() {
                wx.hideLoading();
              }, 1000)
            }
          }, (err) => {
            // `complete` 上传接受后执行的操作(无论成功还是失败都执行)
          });
        }
      }
    })
  },
  removeImage: function() {
    this.setData({
      imagepath: []
    })
  },
  //图片预览
  handleImagePreview(e) {
    let idx = e.target.dataset.idx
    let images = this.data.imagepath
    console.log(images)
    wx.previewImage({
      current: images[idx], //当前图片地址
      urls: images
    })
  },
  choseBillType: function() {
    wx.navigateTo({
      url: '../../pages/billtype/billtype?classifyType=' + app.globalData.classifyType,
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
      let that = this
      wx.chooseLocation({
        success: function(res) {
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
        address: ""
      })
    }
  },
  bindMultiPickerColumnChange(e) {
    const data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    }
    this.data.multiIndex[e.detail.column] = e.detail.value
    switch (e.detail.column) {
      case 0:
        //动态请求后端数据，根据第一列的分类id，结果复制给multiArray
        // let pid = app.globalData.accarray[e.detail.value]['accountClassifyId'];
        this.queryAccountClassifyInfo(app.globalData.accarray[e.detail.value]['accountClassifyId'], app.globalData.userInfo.userId);
        data.multiIndex[1] = 0;
    }
    this.setData(data)
  },
  bindMultiPickerChange(e) {
    let acctwoarray = app.globalData.acctwoarray;
    let select_key = e.detail.value[1];
    this.setData({
      multiIndex: e.detail.value
    })
    app.globalData.cid = acctwoarray[select_key]['accountClassifyId']
  },
  onShow: function() {
    this.change();
    // app.globalData.classifyType = 0;
    if (app.globalData.accoenarray == "") {
      this.queryAccClassifyInfoByfId();
    } else {
      this.setData({
        multiArray: [app.globalData.accoenarray, []],
      })
      this.queryAccountClassifyInfo(1, app.globalData.userInfo.userId);
    }
  },
  queryAccClassifyInfoByfId: function() {
    let that = this;
    let url = "queryAccClassifyInfoByfId";
    http.HttpRequst("POST", url, null, false, 1, function(res) {
      let arrdata = res.data.data.map(item => {
        return item.accountClassifyName
      })
      that.setData({
        multiArray: [arrdata, []],
      })
      app.globalData.accoenarray = arrdata
      app.globalData.accarray = res.data.data
      that.queryAccountClassifyInfo(1, app.globalData.userInfo.userId);
    })
  },
  queryAccountClassifyInfo(fid, uid) {
    let that = this;
    let url = "queryAccClassifyInfoByfId";
    http.HttpRequst("POST", url, {
      'userId': uid,
      'fAccountclassifyId': fid
    }, false, 1, function(res) {
      let acctwoarray = res.data.data.map(item => {
        return item.accountClassifyName
      })
      let arrdata = app.globalData.accoenarray;
      that.setData({
        multiArray: [arrdata, acctwoarray],
        // acctwoarray: res.data
      })
      app.globalData.acctwoarray = acctwoarray
    })
  },
  addbill: function(e) {
    let that = this;
    let url = "addBill";
    let bill = {
      userId: app.globalData.userInfo.userId,
      accountClassifyId: app.globalData.cid || 7,
      classify: that.data.billclassfyid,
      date: that.data.date,
      remarks: that.data.remarks,
      billMoney: that.data.nummber,
      accountTypeId: e.currentTarget.dataset.accounttype,
      address: that.data.address,
      images: that.data.imagepath
    }
    http.HttpRequst("POST", url, bill, true, 0, function(res) {
      if (!res.data.data) {
        wx.showModal({
          title: '警告',
          content: res.data.message,
          showCancel: false,
          confirmText: '确认'
        });
      } else {
        app.globalData.key="tab1";
        wx.switchTab({
          url: '../../pages/home/home',
          success: function(e) {
            wx.removeStorageSync("bill");
            let page = getCurrentPages().pop();
            if (page == undefined || page == null) return;
            page.onLoad();
          }
        })
      }
    })
  },
  bindInput: function(e) {
    this.setData({
      nummber: e.detail.detail.value
    })
    if (e.detail.detail.value == "") {
      this.setData({
        nummber: "0.00"
      })
    }
  },
  bindInputRemark: function(e) {
    this.setData({
      remarks: e.detail.detail.value
    })
  }
})