var http = require('../../utils/request.js')
let chart = null;
let app = getApp();

function compare(property) {
  return function(a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  }
}

function initChart(canvas, width, height, F2) {
  var data = app.globalData.piedata;
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });
  chart.source(data);
  chart.coord('polar', {
    transposed: true,
    radius: 0.75
  });
  chart.legend(false);
  chart.axis(false);
  chart.tooltip(false);

  // 添加饼图文本
  chart.pieLabel({
    sidePadding: 40,
    label1: function label1(data, color) {
      return {
        text: data.name,
        fill: color
      };
    },
    label2: function label2(data) {
      return {
        text: '￥' + String(Math.floor(data.nummber * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        fill: '#808080',
        fontWeight: 'bold'
      };
    }
  });

  chart.interval().position('const*nummber').color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864']).adjust('stack');
  chart.render();
}

function initLineChart(canvas, width, height, F2) {
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });

  var Global = F2.Global;
  var sortdata = app.globalData.piedata;
  var data = sortdata.sort(compare('nummber'));
  chart.source(data, {
    population: {
      tickCount: 5
    }
  });
  chart.coord({
    transposed: true
  });
  chart.axis('name', {
    line: Global._defaultAxis.line,
    grid: null
  });
  chart.axis('nummber', {
    line: null,
    grid: Global._defaultAxis.grid,
    label: function label(text, index, total) {
      var textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.interval().position('name*nummber');
  chart.render();

  return chart;
}

Page({
  data: {
    ec: {
      lazyLoad: true
    },
    opts: {
      onInit: initLineChart
    },
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    current: 'tab1',
  },
  onLoad: function() {
    this.loadData();
  },
  loadData: function() {
    var that = this;
    http.HttpRequst("GET", "queryWeekBill", {
      "userId": app.globalData.userInfo.userId
    }, true, 1, function(res) {
      app.globalData.piedata = res.data;
      that.ecComponent = that.selectComponent('#guage-dom');
      that.ecComponent.init(initChart);
    })
  },
  back: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  clickTab: function(e) {
    if (e.currentTarget.dataset.current == "tab1") {
      this.onLoad()
    }
    this.setData({
      current: e.currentTarget.dataset.current,
    })
  }
});