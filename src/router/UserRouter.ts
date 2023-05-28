import UserDao, { Userinfo } from '../modules/userinfo/dao/UserDao'
import { Context } from 'koa'
import Router from 'koa-router'
import { success } from '../common/resResult'
const router = new Router()
router.prefix('/usermodule')
router.get('/findUserWithPager/:pageNum/:pageSize', async (ctx: Context) => {
  const { pageNum, pageSize } = ctx.params
  const offset = (pageNum - 1) * pageSize
  ctx.body = success(await UserDao.findUserWithPager(offset, +pageSize))
})
router.get('/countTotal', async (ctx: Context) => {
  ctx.body = success(await UserDao.countUserinfo())
})
router.get('/findByUsmAndAddr', async (ctx: Context) => {
  ctx.body = success(await UserDao.findByUsmAndAddr())
})
router.get('/findByLike/:key', async (ctx: Context) => {
  const { key } = ctx.params
  ctx.body = success(await UserDao.findByLike(key))
})
router.get('/findOneUser/:username/:psw', async (ctx: Context) => {
  const { username, psw } = ctx.params
  ctx.body = success(await UserDao.findByUsmAndPsw(username, psw))
})
router.get('/findByProps', async (ctx: Context) => {
  ctx.body = success(await UserDao.findByProps())
})
router.get('/findAllUser', async (ctx: Context) => {
  ctx.body = success(await UserDao.findAllUser())
})
router.post('/addUser', async (ctx: Context) => {
  const userinfo: Userinfo = ctx.request.body
  const dbUserinfo = await UserDao.addUser(userinfo)
  ctx.body = success(dbUserinfo)
})
module.exports = router