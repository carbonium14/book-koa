import { Context } from "koa"
import { get } from '../decorator/reqmethoddecorator'
import { success } from "../common/resResult"
import CtgyDao from "../modules/ctgy/dao/CtgyDao"
import { Controller } from "../decorator/controllerdecorator"
import ctgyService from "../modules/ctgy/service/CtgyService"
@Controller('/ctgymodule')
class CtgyController {
  @get('/findSecThrdCtgys/:firstCtgyId')
  async findSecThrdCtgys(ctx: Context) {
    const { firstCtgyId } = ctx.params
    const result = await CtgyDao.findSecThrdCtgys(firstCtgyId)
    ctx.body = success(result)
  }
  @get('/findFirstCtgys')
  async findFirstCtgys(ctx: Context) {
    const result = await ctgyService.findFirstCtgys()
    ctx.body = success(result)
  }
}