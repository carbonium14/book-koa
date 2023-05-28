import { Context } from "koa"
import { get } from '../decorator/reqmethoddecorator'
import { success } from "../common/resResult"
import CtgyDao from "../modules/ctgy/dao/CtgyDao"
import { Controller } from "../decorator/controllerdecorator"
@Controller('/ctgymodule')
class CtgyController {
  @get('/findSecThrdCtgys/:firstCtgyId')
  async findSecThrdCtgys(ctx: Context) {
    const { firstCtgyId } = ctx.params
    const result = await CtgyDao.findSecThrdCtgys(firstCtgyId)
    ctx.body = success(result)
  }
}