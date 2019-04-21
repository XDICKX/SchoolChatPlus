// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  name=event.name
  desc=event.desc
  console.log(event)
  const { OPENID, APPID } = cloud.getWXContext() 
  console.log(1)
  const db = cloud.database()
  if (name!=null){
    console.log(name)
    await db.collection("userID").where({ _openid: OPENID }).update({data:{name:name}})
  }
  if (desc!=null){
    console.log(desc)
    await db.collection("userID").where({ _openid: OPENID }).update({data:{desc:desc}})
  }
  return {
  }
}