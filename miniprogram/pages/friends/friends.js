let regeneratorRuntime = require("../../regenerator-runtime/runtime");
Page({
  data: {
      listDatas: []
  },
  chat: function (e) {
    console.log(e.currentTarget.dataset)
    wx.setStorage({
      key: 'chat',
      data: this.data.listDatas[e.currentTarget.dataset.bindex]._openid,
    })
    wx.navigateTo({
      url: '../chat/chat',
    })
  },
  async onPullDownRefresh(e){
    wx.cloud.init({
      traceUser: true,
    })
    const temp = await wx.cloud.callFunction({ name: 'loadfriend' })
    this.setData({ listDatas: temp.result.ret })
    console.log(this.data.listDatas)
  },
  async onLoad(e) {
    wx.cloud.init({
      traceUser: true,
    })
    const temp = await wx.cloud.callFunction({ name: 'loadfriend' })
    this.setData({ listDatas: temp.result.ret})
    
  },
  async newFriend(e) {
    wx.navigateTo({
      url: '../searchfriend/searchfriend',
    })
  },
})
