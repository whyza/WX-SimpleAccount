export default Component({
  data: {
    maskOptions: {
      opacity: '0.1',
      backgroundColor: '#ff6600'
    }
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    popupTap() {
      debugger;
    },
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