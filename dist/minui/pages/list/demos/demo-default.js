export default Component({
  data: {
    check: true
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    onCheck() {
      let check = this.data.check;
      this.setData({
        check: !check
      });
    }
  }
});