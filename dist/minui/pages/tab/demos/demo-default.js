export default Component({
  data: {
    tabs: [{ title: '选项一', content: '内容一' }, { title: '选项二', content: '内容二' }, { title: '选项三', content: '内容三' }]
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    onClick: function (e) {
      console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
    }
  }
});