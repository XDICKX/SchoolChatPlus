// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID, APPID } = cloud.getWXContext() // 这里获取到的 openId 和 appId 是可信的
  var fromID=OPENID
  var toID=event.toID
  var message=event.message
  const db = cloud.database()
  console.log(fromID)
  console.log(toID)
  await db.collection(fromID+"chat").add({data:{ toID:toID,message:message,type:1}})
  await db.collection(toID+"chat").add({ data: { fromID:fromID, message: message, type: 0}})
}