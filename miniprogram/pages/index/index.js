const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/1.jpeg',
      '../../images/2.png',
      '../../images/3.png'
    ],
    context: [{ eventType: "倒计时", time: "2019年五月四日", weekday: "星期五", restTime: "13" ,name:"运动会"}, { eventType: "倒计时", time: "2019年四月二十日", weekday: "星期三", restTime: "3",name:"信安考试"}],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    index: 0,
    bottom: 0,
    top: ['推荐', '话题'],
    topic: 0,
    searchClass: ['话题', '帖子'],
    searchIdx: 0,
    hot: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //推荐
    login: true,
    page: 0,
    searchInp: "",
    searchContent: "",
    haveSearch: false,
    tosearch: false,
    refresh: true
  },
  jumpTo1:function(e) {
    wx.navigateTo({
      url: '../news1/news1',
    })
  },
  jumpTo2: function (e) {
    wx.navigateTo({
      url: '../news2/news2',
    })
  },
  jumpTo3: function (e) {
    wx.navigateTo({
      url: '../news3/news3',
    })
  }
})