// pages/my_info/my_info.js
let regeneratorRuntime = require("../../regenerator-runtime/runtime");


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userAvatar: '../../images/1.png',
    name:"这个人很懒,没有取名字",
    desc:"这个人很懒，什么都没留下"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onPullDownRefresh(e) {
    wx.cloud.init({
      traceUser: true,
    })
    const temp1 = await wx.cloud.callFunction({ name: 'loadInform' })
    const temp=temp1.result.ret[0]
    console.log(temp)
    if (temp.name) {
      this.setData({name: temp.name } )
    }
    if (temp.desc) {
      this.setData({desc: temp.desc })
    }
    console.log(this.data.user)
  },
  async onLoad(e) {
    wx.cloud.init({
      traceUser: true,
    })
    const temp1 = await wx.cloud.callFunction({ name: 'loadInform' })
    const temp=temp1.result.ret[0]
    if (temp.name) {
      this.setData({ name: temp.name })
    }
    if (temp.desc) {
      this.setData({ desc: temp.desc })
    }
  },
  async onShow(e) {
    wx.cloud.init({
      traceUser: true,
    })
    await wx.cloud.callFunction({name:'updateInform',data:{name:wx.getStorageSync('name'
    ) ,desc:wx.getStorageSync(
      'desc'
    )}})
    await console.log(wx.getStorageSync('desc'))
    const temp1 = await wx.cloud.callFunction({ name: 'loadInform' })
    const temp = temp1.result.ret[0]
    if (temp.name) {
      this.setData({ name: temp.name })
    }
    if (temp.desc) {
      this.setData({ desc: temp.desc })
    }
  },
  onShareAppMessage: function (res) {
    return {
      title: '难眠',
    }
  },
  toInformation: function (e) {
    wx.navigateTo({
      url: '../information/information',
    })
  }

})