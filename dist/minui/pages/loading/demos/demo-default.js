export default Component({
  data: {
    $loading: {
      isShow: false
    }
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    showLoading() {
      this.setData({
        $loading: {
          isShow: true
        }
      });
      setTimeout(() => {
        this.setData({
          $loading: {
            isShow: false
          }
        });
      }, 1000);
    }
  }
});