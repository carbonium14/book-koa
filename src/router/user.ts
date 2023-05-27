import userDaoDefine from '../dao/UserDaoDefine'
import Userinfo from '../model/Userinfo'
import { Context } from 'koa'
import Router from 'koa-router'
import { success } from '../common/resResult'
const router = new Router()
router.prefix('/usermodule')
router.get('/findUserWithPager/:pageNum/:pageSize', async (ctx: Context) => {
  const { pageNum, pageSize } = ctx.params
  const offset = (pageNum - 1) * pageSize
  ctx.body = success(await userDaoDefine.findUserWithPager(offset, +pageSize))
})
router.get('/countTotal', async (ctx: Context) => {
  ctx.body = success(await userDaoDefine.countUserinfo())
})
router.get('/findByUsmAndAddr', async (ctx: Context) => {
  ctx.body = success(await userDaoDefine.findByUsmAndAddr())
})
router.get('/findByLike/:key', async (ctx: Context) => {
  const { key } = ctx.params
  ctx.body = success(await userDaoDefine.findByLike(key))
})
router.get('/findOneUser/:username/:psw', async (ctx: Context) => {
  const { username, psw } = ctx.params
  ctx.body = success(await userDaoDefine.findByUsmAndPsw(username, psw))
})
router.get('/findByProps', async (ctx: Context) => {
  ctx.body = success(await userDaoDefine.findByProps())
})
router.get('/findAllUser', async (ctx: Context) => {
  ctx.body = success(await userDaoDefine.findAllUser())
})
router.post('/addUser', async (ctx: Context) => {
  const userinfo: Userinfo = ctx.request.body
  const dbUserinfo = await userDaoDefine.addUser(userinfo)
  ctx.body = success(dbUserinfo)
})
module.exports = router