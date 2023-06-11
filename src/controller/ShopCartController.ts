import { Context } from 'koa'
import { Controller } from '../decorator/controllerdecorator'
import { get, post, del } from '../decorator/reqmethoddecorator'
import shopCartService from '../modules/shopcart/service/ShopCartService'
import { success } from '../common/resResult'
@Controller('/shopcartmodule')
class ShopCartController {
  @get('/findCurUseShopCartLst/:userid')
  async findCurUseShopCartLst(ctx: Context) {
    const { userid } = ctx.params
    const result = await shopCartService.findCurUseShopCartLst(userid)
    ctx.body = success(result)
  }
  @post('/addBookToShopCart')
  async addBookToShopCart(ctx: Context) {
    const shopCartRaw = ctx.request.body
    const dbShopCart = await shopCartService.addBookToShopCart(shopCartRaw)
    ctx.body = success(dbShopCart)
  }
  @post('/appOrSubtrBookFrmShopCart')
  async appOrSubtrBookFrmShopCart(ctx: Context) {
    const shopCartRaw = ctx.request.body
    const dbShopCart = await shopCartService.appOrSubtrBookFrmShopCart(shopCartRaw)
    ctx.body = success(dbShopCart)
  }
  @del('/delBookShopCart/:shopcartid')
  async deOneBookFrmSc(ctx: Context) {
    const { shopcartid } = ctx.params
    const delRecNum = await shopCartService.delOneBookFrmSc(shopcartid)
    ctx.body = success(delRecNum)
  }
}