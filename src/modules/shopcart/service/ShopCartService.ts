import shopCartDao from '../dao/ShopCartDao'
import { combine } from '../../commonTypes'
class ShopCartService {
  static shopCartService: ShopCartService = new ShopCartService()
  async findCurUseShopCartLst(userid: number) {
    return await shopCartDao.findCurUseShopCartLst(userid)
  }
  async addBookToShopCart(shopcart: any) {
    const result = await shopCartDao.addBookToShopCart(shopcart)
    return combine({ shopcartid: result[0] }, shopcart)
  }
  async appOrSubtrBookFrmShopCart(shopcart: any) {
    await shopCartDao.appOrSubtrBookFrmShopCart(shopcart)
    return shopcart
  }
  async delOneBookFrmSc(shopcartid: number) {
    return await shopCartDao.delOneBookFrmSc(shopcartid)
  }
}
export default ShopCartService.shopCartService