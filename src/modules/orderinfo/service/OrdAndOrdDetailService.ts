import ordAndOrdDetailDao from "../dao/OrdAndOrdDetailDao"
import { OrderInfo, OrdAndOrdDetailLst } from "../defmodel/entity"
import { addEntryToArr } from '../../commonTypes'
import shopCartDao from "../../shopcart/dao/ShopCartDao"
import convert from '../moduleTypes'
class OrdAndOrdDetailService {
  static ordAndOrdDetailService: OrdAndOrdDetailService = new OrdAndOrdDetailService()
  async submitOrder(ordAndOrdDetail: OrderInfo) {
    const orderinfo: OrderInfo = {
      customerid: ordAndOrdDetail.customerid,
      ordertime: ordAndOrdDetail.ordertime,
      orderstatus: 1
    }
    const dborderid = (await ordAndOrdDetailDao.addOrderInfo(orderinfo))[0] as number
    ordAndOrdDetail.orderid = dborderid
    const orderDetailLst = ordAndOrdDetail.orderDetailList!
    const lastOrderDetailLst = addEntryToArr(orderDetailLst, 'orderid', dborderid)
    let dbOrderDetailId: number
    for (let orderDetail of lastOrderDetailLst) {
      dbOrderDetailId = (await ordAndOrdDetailDao.addOrderDetail(orderDetail))[0]
      orderDetail.orderdetailid = dbOrderDetailId
      await shopCartDao.delOneBookFrmSc(orderDetail.shopcartid!)
    }
    ordAndOrdDetail.orderDetailList = lastOrderDetailLst
    return ordAndOrdDetail
  }
  async findCurUsrOrdAndOrdDetail(customerid: string) {
    return convert((await ordAndOrdDetailDao.findCurUsrOrdAndOrdDetail(customerid))[0])
  }
  async uptOrdStatusByOrdId(orderid: number, orderstatus: number) {
    const uptRows: number = (await ordAndOrdDetailDao.uptOrdStatusByOrdId(orderid, orderstatus))[0]['affectedRows']
    return uptRows
  }
}
export default OrdAndOrdDetailService.ordAndOrdDetailService