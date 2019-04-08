export default Page({
  data: {
    '__code__': {
      readme: ''
    },

    wechatInfo: {
      image: 'https://s10.mogucdn.com/mlcdn/c45406/180108_888g0d26e23h9j8fc9e3bd7j3e85h_430x430.jpg_320x999.jpg'
    },
    weApps: [{
      'title': '蘑菇街女装精选',
      'qrcode': 'https://s10.mogucdn.com/mlcdn/c45406/171109_75kgh1k6f0dl7hf67325bcl2dld4c_430x430.jpg'
    }, {
      'title': '小店微商城',
      'qrcode': 'https://s10.mogucdn.com/mlcdn/c45406/171109_113k5be6hfhld22lg5cabi6d6fi43_430x430.jpg'
    }, {
      'title': '超级购物台',
      'qrcode': 'https://s10.mogucdn.com/mlcdn/c45406/171109_43acl29a9lcidekhbjafjbke2d8a3_430x430.jpg'
    }, {
      'title': '全球爆款折扣商城',
      'qrcode': 'https://s10.mogucdn.com/mlcdn/c45406/171130_8blh9b4819cg9li85icg2jgbl6038_344x344.png'
    }, {
      'title': '蘑菇生活优选',
      'qrcode': 'https://s10.mogucdn.com/mlcdn/c45406/171109_39c1aah1j1hela8i4j9lh34d9gf55_344x344.jpg'
    }, {
      'title': '大福利',
      'qrcode': 'https://s11.mogucdn.com/mlcdn/c45406/171117_6438akf0gi8h6idecjai8kiiefchj_344x344.jpg'
    }, {
      'title': '美丽联合钱包',
      'qrcode': 'https://s11.mogucdn.com/mlcdn/c45406/171108_53bgfeid8c9jecaahcgfia3f85fkk_1280x1280.jpg'
    }, {
      'title': '蘑客联盟',
      'qrcode': 'https://s10.mogucdn.com/mlcdn/c45406/171120_269dc6kh9g67e03dfhkgbjh70d91d_258x258.jpg'
    }]
  },
  onShareAppMessage: function () {
    return {
      title: '团队介绍 - MinUI小程序组件库',
      path: '/pages/about/index'
    };
  },
  onWechatImage(e) {
    let image = e.currentTarget.dataset.image;
    wx.previewImage({
      current: image,
      urls: [image]
    });
  },
  onImageTap(param) {
    wx.previewImage({
      current: this.data.weApps[param.currentTarget.id].qrcode,
      urls: [this.data.weApps[param.currentTarget.id].qrcode]
    });
  }
});