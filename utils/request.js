module.exports = {
  HttpRequst: HttpRequst
}
// const baseUrl = "http://localhost:8081/"; //测试环境
const baseUrl = "https://iazuresky.com:8443/"; //正式环境
// const baseUrl = "https://192.168.199.211:8443/";
//ask是是否要进行询问授权，true为要，false为不要
// sessionChoose为1,2,3,4,所以paramSession下标为0的则为空
function HttpRequst(method, url, params, loading, header, callBack) {
  if (loading == true) {
    wx.showToast({
      title: '数据加载中',
      icon: 'loading'
    })
  }
  wx.request({
    url: baseUrl + url,
    data: params,
    dataType: "json",
    header: {
      'content-type': header == 0 ? 'application/json' : 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    method: method,
    success: function(res) {
      if (loading == true) {
        wx.hideToast(); //隐藏提示框
      }
      callBack(res);
    },
    fail: function(res) { //请求失败时显示弹框
      console.log(res);
      wx.showModal({
        title: '提示',
        content: '请求失败！由于网络请求时间过长或网络无法连接的原因，请确认网络畅通，点击"重新请求"进行再次请求！',
        confirmText: "重新请求",
        success: function(res) {
          if (res.confirm) {
            HttpRequst(method, url, params, loading, header, callBack); //再次进行请求
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      })
    },
    complete: function() {
      if (loading == true) {
        wx.hideToast(); //隐藏提示框
      }
    }
  })
}