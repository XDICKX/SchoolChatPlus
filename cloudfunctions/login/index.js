// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init()

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = async(event, context) => {
  const { OPENID, APPID } = cloud.getWXContext() // 这里获取到的 openId 和 appId 是可信的
  const db = cloud.database()
  const user = db.collection('userID')
  var flag = false
  var temp = await user.where({ _openid: OPENID }).count()
  console.log(temp)
 if (temp.total==0) { console.log(1); flag = true;     
  await db.collection('userID').add({data: {_openid:OPENID}})
  await db.createCollection(OPENID)
  await db.createCollection(OPENID+"chat")
  } 
  return {
    OPENID,
    APPID,
    flag
  }
}