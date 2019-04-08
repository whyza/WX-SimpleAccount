export default Component({
  data: {
    notice: '蘑菇街平台将在1月22日0点－9点进行系统升级，升级期间将暂停服务，敬请谅解。'
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    onClose() {
      wx.showToast({ title: 'closed' });
    }
  }
});