var app = getApp();
Component({
  data: {
  },
  methods:{
    gotoAdd:function(){
      wx.navigateTo({
        url: '/pages/add/add',
      })
    }
  }
})