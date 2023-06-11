import { shopCartModel } from '../defmodel'
import { sequelize } from '../../BaseDao'
class ShopCartDao {
  static shopCartDao: ShopCartDao = new ShopCartDao()
  async findCurUseShopCartLst(userid: number) {
    return await shopCartModel.findAll({
      raw: true,
      where: {
        userid
      }
    })
  }
  async addBookToShopCart(shopcart: any): Promise<[any, any]> {
    const sql = `insert into shopcart(bookisbn,bookname,bookpicname,bookprice,userid,purcharsenum) values('${shopcart.bookisbn}','${shopcart.bookname}','${shopcart.bookpicname}',${shopcart.bookprice},${shopcart.userid},${shopcart.purcharsenum})`
    return await sequelize.query(sql)
  }
  async appOrSubtrBookFrmShopCart(shopcart: any): Promise<[any, any]> {
    const sql = `update shopcart set purcharsenum=${shopcart.purcharsenum} where shopcartid=${shopcart.shopcartid}`
    return await sequelize.query(sql)
  }
  async delOneBookFrmSc(shopcartid: number) {
    return await shopCartModel.destroy({
      where: {
        shopcartid
      }
    })
  }
}
export default ShopCartDao.shopCartDao