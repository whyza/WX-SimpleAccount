export default Component({

  data: {},

  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    maskTap() {
      console.log('mask is clicked');
    },
    showMask() {
      let $mask = this.selectComponent('.J_mask');
      /*$mask.show()*/
      $mask.toggle(true);
    },
    hideMask() {
      let $mask = this.selectComponent('.J_mask');
      /*$mask.hide()*/
      $mask.toggle();
    }
  }
});