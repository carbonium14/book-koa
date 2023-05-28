import { success } from '../common/resResult'
import CtgyDao from '../modules/ctgy/dao/CtgyDao'
import { Context } from 'koa'
import Router from 'koa-router'
const router = new Router()
router.prefix('/ctgymodule')
router.get('/findSecThrdCtgys/:firstCtgyId', async (ctx: Context) => {
  const { firstCtgyId } = ctx.params
  const result = await CtgyDao.findSecThrdCtgys(firstCtgyId)
  ctx.body = success(result)
})
module.exports = router