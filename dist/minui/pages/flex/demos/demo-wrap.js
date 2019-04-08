export default Component({
  data: {
    wrap: 'nowrap'
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    setWrapToNowrap: function () {
      this.setData({
        wrap: 'nowrap'
      });
    },
    setWrapToWrap: function () {
      this.setData({
        wrap: 'wrap'
      });
    },
    setWrapToReverse: function () {
      this.setData({
        wrap: 'reverse'
      });
    }
  }
});