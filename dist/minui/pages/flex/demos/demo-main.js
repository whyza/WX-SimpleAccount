export default Component({
  data: {
    main: 'left'
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    setMainToStart: function () {
      this.setData({
        main: 'start'
      });
    },
    setMainToEnd: function () {
      this.setData({
        main: 'end'
      });
    },
    setMainToBetween: function () {
      this.setData({
        main: 'between'
      });
    },
    setMainToCenter: function () {
      this.setData({
        main: 'center'
      });
    },
    setMainToAround: function () {
      this.setData({
        main: 'around'
      });
    }
  }
});