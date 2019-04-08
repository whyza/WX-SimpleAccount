export default Component({
  data: {
    dir: 'left'
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    setDirToLeft: function () {
      this.setData({
        dir: 'left'
      });
    },
    setDirToRight: function () {
      this.setData({
        dir: 'right'
      });
    },
    setDirToTop: function () {
      this.setData({
        dir: 'top'
      });
    },
    setDirToBottom: function () {
      this.setData({
        dir: 'bottom'
      });
    }
  }
});