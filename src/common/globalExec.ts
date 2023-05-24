import { Context, Next } from 'koa'
import { fail } from './resResult'
const globalException = async (ctx: Context, next: Next) => {
  try {
    await next() 
  } catch (error) {
    const errorResult = error as Error
    ctx.body = fail(`服务器错误: ${errorResult.message}`)
  }
}
export default globalException