export default Component({
  data: {
    isShow: false,
    text: ''
  },
  methods: {
    onSwitch: function (param) {
      console.log('onSwitch');
      console.log(param);

      this.setData({
        isShow: true,
        text: param.detail.checked ? '开启' : '关闭'
      });

      setTimeout(() => {
        this.setData({
          isShow: false
        });
      }, 600);
    }
  }
});