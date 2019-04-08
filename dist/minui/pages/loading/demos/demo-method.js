export default Component({
  data: {},
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    showLoading() {
      let $loading = this.selectComponent('.J_loading');
      $loading && $loading.show();

      setTimeout(() => {
        $loading && $loading.hide();
      }, 2000);
    }
  }
});