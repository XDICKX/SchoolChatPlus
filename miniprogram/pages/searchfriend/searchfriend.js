// pages/searchfriend/searchfriend.js
let regeneratorRuntime = require("../../regenerator-runtime/runtime");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  onPullDownRefresh: function () {

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
    cancel(e) {
    wx.navigateBack({
      delta: 1
    })
  },
  async change(e) {
    var name = e.detail.value.name
    wx.cloud.init({
      traceUser: true,
    })
    const temp1 = await wx.cloud.callFunction({ name: 'newfriend' ,data:{fname:name}})
    console.log(temp1)
    if (temp1.result.exist==-1){
      wx.showToast({
        title: '不存在该用户'
      })
    }
    else if (temp1.result.exist==1){
      wx.showToast({
        title: '已有该好友'
      })
    }
    else{
      wx.showToast({
        title: '成功'
      })
    }
  }
})