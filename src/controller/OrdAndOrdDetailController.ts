import { Context } from "koa"
import { get, post } from '../decorator/reqmethoddecorator'
import { success } from "../common/resResult"
import { Controller } from "../decorator/controllerdecorator"
import ordAndOrdDetailService from "../modules/orderinfo/service/OrdAndOrdDetailService"
@Controller('/ordAndOrdDetailmodule')
class OrdAndOrdDetailController {
  @post('/addOrdAndOrdDetail')
  async addOrdAndOrdDetail(ctx: Context) {
    const ordAndOrdDetails = ctx.request.body
    const result = await ordAndOrdDetailService.submitOrder(ordAndOrdDetails)
    ctx.body = success(result)
  }
  @get('/findCurUsrOrdAndOrdDetail/:customerid')
  async findCurUsrOrdAndOrdDetail(ctx: Context) {
    const { customerid } = ctx.params
    const result = await ordAndOrdDetailService.findCurUsrOrdAndOrdDetail(customerid)
    ctx.body = success(result)
  }
  @get('/uptOrdStatusByOrdId/:orderid/:orderstatus')
  async uptOrdStatusByOrdId(ctx: Context) {
    const { orderid, orderstatus } = ctx.params
    const result = await ordAndOrdDetailService.uptOrdStatusByOrdId(orderid, orderstatus)
    ctx.body = success(result)
  }
}