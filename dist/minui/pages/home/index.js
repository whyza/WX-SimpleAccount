import config from "./config.js";
let { menus } = config;

export default Page({
  data: {
    "__code__": {
      readme: ""
    },

    menus
  },
  navigate(e) {
    let id = e.target.dataset.id;
    wx.navigateTo({
      url: `/pages/${id}/index`
    });
  },
  onShareAppMessage: function () {
    return {
      title: '基于规范的小程序组件库，简洁、易用、工具化',
      desc: '',
      path: '/pages/home/index',
      imageUrl: 'https://s10.mogucdn.com/mlcdn/c45406/171107_501d0i8a0e8437k8065j1fabk4754_690x540.png'
    };
  }
});