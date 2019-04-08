export default Component({
  data: {},
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    showPopup() {
      let popupComponent = this.selectComponent('.J_Popup');
      popupComponent && popupComponent.show();
    },
    hidePopup() {
      let popupComponent = this.selectComponent('.J_Popup');
      popupComponent && popupComponent.hide();
    }
  }
});