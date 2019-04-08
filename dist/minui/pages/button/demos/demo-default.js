export default Component({
  data: {
    types: ['beauty', 'selection', 'disabled', 'danger', 'success', 'secondary', 'primary', 'info', 'dark', 'warning'],
    style: 'width: 222rpx;background: #ff9300;border-radius: 66rpx;color: #fff;'
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    onSubmit(e) {
      console.log(e.detail.formId);
    }
  }
});