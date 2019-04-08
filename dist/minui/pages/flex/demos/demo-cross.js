export default Component({
  data: {
    cross: 'stretch'
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    setCrossToStretch: function () {
      this.setData({
        cross: 'stretch'
      });
    },
    setCrossToStart: function () {
      this.setData({
        cross: 'start'
      });
    },
    setCrossToEnd: function () {
      this.setData({
        cross: 'end'
      });
    },
    setCrossToCenter: function () {
      this.setData({
        cross: 'center'
      });
    },
    setCrossToBaseline: function () {
      this.setData({
        cross: 'baseline'
      });
    }
  }
});