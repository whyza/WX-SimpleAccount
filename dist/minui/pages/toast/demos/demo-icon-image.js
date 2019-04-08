export default Component({
  data: {
    $toast: {
      show: false,
      title: ""
    }
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    showToast() {
      this.setData({
        $toast: {
          show: true,
          title: "自定义 icon 图片"
        }
      });
      setTimeout(() => {
        this.setData({
          $toast: {
            show: false,
            title: ''
          }
        });
      }, 1500);
    }
  }
});