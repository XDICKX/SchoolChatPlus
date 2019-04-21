// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID, APPID } = cloud.getWXContext() // 这里获取到的 openId 和 appId 是可信的
  const db = cloud.database()
  const fname=event.fname
  const myFriend = db.collection(OPENID)
  const temp1 = await db.collection('userID').where({name:fname}).count();
  if (temp1.total==0){
    return {exist:-1}
  }
  const friend = await db.collection('userID').where({name:fname}).get();
  const friendList=friend.data[0]
  console.log(friendList)
  const me1=await db.collection('userID').where({_openid:OPENID}).get()
  console.log(me1)
  const me=me1.data[0]
  console.log(me)
  console.log(myFriend)
  
   const temp = await myFriend.where({ _openid: friendList._openid }).count()
   console.log(temp)
   if (temp.total != 0){
     return {exist:1}
   }
  console.log(1)
  var name = friendList.name
  var desc=friendList.desc
  await myFriend.add({ data: { _openid: friendList._openid,name:name,desc:desc}})
  await db.collection(friendList._openid).add({ data: { _openid: OPENID, name:me.name, desc: me.desc } })
  return {exist:0}
}