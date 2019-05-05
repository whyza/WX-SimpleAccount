Page({
  data: {
    currentTab: 0,
    students: [{ //假数据  
      url: '1.jpg',
      name: '老王'
    }, {
      url: '1.jpg',
      name: '老王'
    }, {
      url: '1.jpg',
      name: '老王'
    }, {
      url: '1.jpg',
      name: '老王'
    }, {
      url: '1.jpg',
      name: '老王'
    }, {
      url: '1.jpg',
      name: '老王'
    }, {
      url: '1.jpg',
      name: '老王'
    }, {
      url: '1.jpg',
      name: '老王'
    }, {
      url: '1.jpg',
      name: '老王'
    }, {
      url: '1.jpg',
      name: '老王'
    }]
  },

  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换模式
  clickTab: function (e) {
    var that = this;
    if (that.data.currentTab == e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
  },//动态计算高度
  onLoad: function (options) {
    var line = Math.ceil(this.data.students.length / 3.0);
    this.setData({
      aheight: 60 + 160 * line
    });
  }, 

}) 
