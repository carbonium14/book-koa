import { Context } from "koa"
import { get } from '../decorator/reqmethoddecorator'
import { success } from "../common/resResult"
import { Controller } from "../decorator/controllerdecorator"
import evaluateService from "../modules/evaluate/service/EvaluateService"
@Controller('/evaluatemodule')
class EvaluateController {
  @get('/findEvalReplyLst/:isbn')
  async findEvalReplyLst(ctx: Context) {
    const { isbn } = ctx.params
    const result = await evaluateService.findEvalReplyLst(isbn)
    ctx.body = success(result)
  }
}