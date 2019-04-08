export default Component({
  data: {},
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    onAbnorTap() {
      wx.showToast({
        title: 'success',
        duration: 2000
      });
    }
  }
});