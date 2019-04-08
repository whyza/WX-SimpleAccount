export default Page({
  data: {
    '__code__': {
      readme: ''
    }
  },
  onShareAppMessage: function () {
    return {
      title: '色彩规范 - MinUI小程序组件库',
      path: '/pages/color/index'
    };
  },
  methods: {}
});