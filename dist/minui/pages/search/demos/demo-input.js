export default Component({
  data: {},
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    onInput(e) {
      console.log('input: ', e.detail.value);
    },
    onConfirm(e) {
      console.log('confirm: ', e);
    },
    onSearch(e) {
      console.log('onSearch: ', e);
    },
    submitForm(e) {
      console.log('submit', e);
    }
  }
});