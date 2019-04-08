export default Component({
  data: {
    $toast: {
      show: false
    }
  },

  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    showToast() {
      this.setData({
        $toast: {
          show: true
        }
      });
      setTimeout(() => {
        this.setData({
          $toast: {
            show: false
          }
        });
      }, 1500);
    }
  }
});