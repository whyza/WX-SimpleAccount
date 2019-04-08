export default Component({

  data: {
    maskStatus: 'hide'
  },

  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    showMask() {
      this.setData({
        maskStatus: 'show'
      });
    },
    hideMask() {
      this.setData({
        maskStatus: 'hide'
      });
    }
  }
});