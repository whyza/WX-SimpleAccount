export default Component({
  data: {},
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    showDialog() {
      let dialogComponent = this.selectComponent('.wxc-dialog');
      dialogComponent && dialogComponent.show();
    },
    hideDialog() {
      let dialogComponent = this.selectComponent('.wxc-dialog');
      dialogComponent && dialogComponent.hide();
    },
    onConfirm() {
      console.log('点击了确认按钮');
      this.hideDialog();
    },
    onCancel() {
      console.log('点击了取消按钮');
      this.hideDialog();
    }
  }
});