export default Component({
  data: {
    items: [{ value: '1', title: '火箭' }, { value: '2', title: '勇士' }, { value: '3', title: '开拓者' }, { value: '4', title: '雷霆' }, { value: '5', title: '马刺' }]
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    onChange(e) {
      console.log(e.detail.value);
    }
  }
});