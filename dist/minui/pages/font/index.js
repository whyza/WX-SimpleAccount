export default Page({
  data: {
    '__code__': {
      readme: ''
    }
  },
  onShareAppMessage: function () {
    return {
      title: '文字规范 - MinUI小程序组件库',
      path: '/pages/font/index'
    };
  },
  methods: {}
});