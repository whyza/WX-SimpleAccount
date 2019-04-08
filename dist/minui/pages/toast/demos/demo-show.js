export default Component({
  data: {},
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    showToast() {
      let $toast = this.selectComponent(".J_toast");
      $toast && $toast.show('这是show方法传值');
    }
  }
});