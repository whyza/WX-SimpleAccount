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
    imagepath: [],
    address: "",
    ischanged: false,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    current: 'tab1',
    nummber1: "0.00",
    nummber: "0.00",
    currentTab: 0,
    currentTab2: 0,
    date: util.formatDate(new Date()),
    remarks: "",
    // oneChecked: false,
    billdetails: "",
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  queruClassify: function() {
    var that = this;
    http.HttpRequst("GET", "queryAllTwoClassify", {
      userId: app.globalData.userInfo.userId,
      classifyType: app.globalData.classifyType
    }, true, 1, function(res) {
      that.setData({
        billClassfy: res.data,
        // height: 30 + 81*Math.ceil(res.data[0].childrenBillClassfy.length / 5.0)
      })
    })
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
          const fs = wx.getFileSystemManager();
          fs.readFile({
            filePath: tempFilePaths[i],
            encoding:"base64",
            success:function(data){
              // console.log(data)
            }
          })
          //七牛上传
          qiniuUploader.upload(tempFilePaths[i], (res) => {
            that.setData({
              imagepath: that.data.imagepath.concat(res.fileUrl)
            });
          }, (error) => {
            console.log('error: ' + error);
          }, {
            region: 'ECN2',
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
    wx.previewImage({
      current: images[idx], //当前图片地址
      urls: images
    })
  },
  editClassify:function(){
    wx.navigateTo({
      url: '../../pages/addClassify/addClassify',
    })
  },
  back: function() {
    wx.navigateBack({
      delta: 1
    })
    app.globalData.key = "tab1"
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
    this.setData({
      ischanged: false
    })
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
    this.queruClassify()
    if (app.globalData.accoenarray == "") {
      this.queryAccClassifyInfoByfId();
    } else {
      this.setData({
        multiArray: [app.globalData.accoenarray, []],
      })
      this.queryAccountClassifyInfo(1, app.globalData.userInfo.userId);
    }
  },
  onLoad: function(options) {
    let userId = app.globalData.userInfo.userId
    let that = this;
    if (options.isUpdate) {
      var billdetails = JSON.parse(options.billdetails)
      this.setData({
        billdetails: billdetails,
        isUpdate: true,
        billclassfyName: billdetails.classfyName,
        imagepath: billdetails.billImages,
        billclassfyImg: billdetails.icon,
        billclassfyid: billdetails.classify,
        date: billdetails.date,
        nummber: billdetails.billMoney,
        remarks: billdetails.remarks,
        billid: billdetails.billid,
        ischanged: true,
        nummber1: billdetails.billMoney
      })
      if (billdetails.address != "") {
        this.setData({
          address: billdetails.address,
          getLocation: true
        })
      }
      app.globalData.classifyType = billdetails.accountTypeId
      app.globalData.cid = billdetails.accountClassifyId
    } else {
      app.globalData.classifyType = 0;
      app.globalData.key = "tab1"
      this.setData({
        billclassfyid: 10,
        billclassfyImg: "icongaijiaofan"
      })
    }
    this.queruClassify();
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
      app.globalData.acctwoarray = res.data.data
    })
  },
  addbill: function(e) {
    let that = this;
    let url = this.data.isUpdate ? "updateBill" : "addBill";
    if (Math.abs(that.data.nummber) === 0) {
      wx.showModal({
        title: '警告',
        content: "金额不能为0",
        showCancel: false,
        confirmText: '确认'
      });
    } else {
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
      let updatebill = {
        accountClassifyId: app.globalData.cid || 7,
        classify: that.data.billclassfyid,
        date: that.data.date,
        remarks: that.data.remarks,
        billMoney: that.data.nummber,
        address: that.data.address,
        images: that.data.imagepath,
        billid: that.data.billid
      }
      http.HttpRequst("POST", url, this.data.isUpdate ? updatebill : bill, true, 0, function(res) {
        if (!res.data.data) {
          wx.showModal({
            title: '警告',
            content: res.data.message,
            showCancel: false,
            confirmText: '确认'
          });
        } else {
          app.globalData.key = "tab1";
          wx.switchTab({
            url: '../../pages/home/home',
            success: function(e) {
              let page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              page.onLoad();
            }
          })
        }
      })
    }
  },
  bindInput: function(e) {
    this.setData({
      nummber: e.detail.detail.value
    })
  },
  bindInputRemark: function(e) {
    this.setData({
      remarks: e.detail.detail.value
    })
  },
  swiperTab2: function(e) {
    var that = this;
    // that.get_wxml('#item' + e.detail.current, (rects) => {
    //   that.setData({
    //     height: rects[0].height
    //   })
    // })
    that.setData({
      currentTab2: e.detail.current
    });
  },
  //滑动切换
  swiperTab: function(e) {
    var that = this;
    // that.get_wxml('#item' + e.detail.current, (rects) => {
    //   that.setData({
    //     height: rects[0].height
    //   })
    // })
    that.setData({
      currentTab: e.detail.current
    });
  },
  get_wxml: function(className, callback) {
    wx.createSelectorQuery().selectAll(className).boundingClientRect(callback).exec()
  },
  choseClassify: function(e) {
    this.setData({
      billclassfyid: e.currentTarget.dataset.billclassfyid,
      billclassfyName: e.currentTarget.dataset.name,
      billclassfyImg: e.currentTarget.dataset.img,
    });
  },
  //点击切换模式
  clickTab: function(e) {
    var that = this;
    var key = e.currentTarget.dataset.current;
    if (that.data.current == e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        current: e.currentTarget.dataset.current,
        nummber1: that.data.nummber == "" ? "0.00" : that.data.nummber
      })
      app.globalData.key = key
      if (app.globalData.key == "tab2") {
        app.globalData.classifyType = 1
        this.setData({
          billclassfyid: 46,
          billclassfyImg: "icongongzizhuanhu"
        })
        this.queruClassify();
      } else if (app.globalData.key == "tab1") {
        app.globalData.classifyType = 0;
        this.setData({
          billclassfyid: 10,
          billclassfyImg: "icongaijiaofan"
        })
        this.queruClassify();
      }
    }
  }
})