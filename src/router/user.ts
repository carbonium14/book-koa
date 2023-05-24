import { Context } from 'koa'
import Router from 'koa-router'
interface UserInfo {
  username: string,
  psw: string
}
const router = new Router()
router.prefix('/usermodule')
router.get('/findUserInfo/:username', async (ctx: Context) => {
  const { username } = ctx.params
  ctx.body = username
})
router.post('/addUser', async (ctx: Context) => {
  const user: UserInfo = ctx.request.body
  ctx.body = user
})
module.exports = router