export default Component({
  data: {
    image: 'https://s10.mogucdn.com/p2/161213/upload_76h1c5hjc8heecjehlfgekjdl2ki0_514x260.png',
    title: '自定义标题',
    tip: '自定义副标题',
    button: '点我'
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    onAbnorTap() {
      wx.showToast({
        title: 'custom',
        duration: 2000
      });
    }
  }
});