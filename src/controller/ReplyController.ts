import { Context } from "koa"
import { post } from '../decorator/reqmethoddecorator'
import { success } from "../common/resResult"
import { Controller } from "../decorator/controllerdecorator"
import replyService from "../modules/reply/service/ReplyService"
@Controller('/replymodule')
class ReplyController {
  @post('/addReply')
  async addReply(ctx: Context) {
    const reply = ctx.request.body
    const lastdbreply = await replyService.addReply(reply)
    ctx.body = success(lastdbreply)
  }
}