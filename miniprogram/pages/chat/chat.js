// pages/chat/chat.js
let regeneratorRuntime = require("../../regenerator-runtime/runtime");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [{date:"3.55",message:"hello",type:1,id:"no"}],
    input: null,
    openid: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(e) {
    var _this = this;
    this.setData({ openid: wx.getStorageSync("chat") })

    wx.cloud.init({
      traceUser: true,
    })
    const temp = await wx.cloud.callFunction({ name: 'loadchat', data: { toID: this.data.openid } })
    this.setData({ newsList: temp.result.user.data})
    console.log(temp)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  async onShow (e) {
    wx.cloud.init({
      traceUser: true,
    })
    const temp = await wx.cloud.callFunction({ name: 'loadchat',data:{toID:this.data.openid} })
    this.setData({ newsList: temp.result.user.data })
    console.log(temp)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  async onPullDownRefresh (e) {
    wx.cloud.init({
      traceUser: true,
    })
    const temp = await wx.cloud.callFunction({ name: 'loadchat', data: { toID: this.data.openid } })
    this.setData({ newsList: temp.result.user.data})
    console.log(temp)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  async send(e) {
    wx.cloud.init({
      traceUser: true,
    })
    console.log(this.data.input)
    await wx.cloud.callFunction({ name: 'chatTo', data: { toID: this.data.openid ,message:this.data.input} })
    const temp = await wx.cloud.callFunction({ name: 'loadchat', data: { toID: this.data.openid } })
    this.setData({ newsList: temp.result.user.data })
  },
  bindChange: function (res) {
    this.setData({input:res.detail.value})
  },
  back: function () {
    ;
  }
})