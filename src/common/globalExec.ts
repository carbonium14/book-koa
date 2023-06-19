import { Context, Next } from 'koa'
import { fail } from './resResult'
const globalException = async (ctx: Context, next: Next) => {
  await next().catch((err) => {
    if (err.status === 401) {
      ctx.body = fail('这是不合法的或者过期的token')
    } else {
      ctx.body = fail(`服务器错误: ${err}`)
    }
  })
}
export default globalException