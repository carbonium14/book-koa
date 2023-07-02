import { sequelize } from "../../BaseDao"
import { OrderDetail, OrderInfo } from '../defmodel/entity'
class OrdAndOrdDetailDao {
  static ordAndOrdDetailDao: OrdAndOrdDetailDao = new OrdAndOrdDetailDao()
  async addOrderInfo(orderinfo: OrderInfo): Promise<[any, any]> {
    const ordSql = `insert into orderinfo(ordertime,customerid,orderstatus) values('${orderinfo.ordertime}',${orderinfo.customerid},${orderinfo.orderstatus})`
    return await sequelize.query(ordSql)
  }
  async addOrderDetail(orderdetail: OrderDetail): Promise<[any, any]> {
    const ordDetailSql = `insert into orderdetail(bookname,bookprice,bookpicname,orderid,purcharsenum) values('${orderdetail.bookname}',${orderdetail.bookprice},'${orderdetail.bookpicname}',${orderdetail.orderid},${orderdetail.purcharsenum})`
    return await sequelize.query(ordDetailSql)
  }
  async findCurUsrOrdAndOrdDetail(customerid: string): Promise<[any, any]> {
    const ordAndOrdDetailSql = `select oi.orderid,date_format(oi.ordertime,'%Y-%m-%d %H:%i:%s') as ordertime,oi.customerid,oi.orderstatus,odi.bookname,odi.bookpicname,odi.bookprice,odi.orderdetailid,odi.purcharsenum from orderinfo oi inner join book.orderdetail odi on oi.orderid=odi.orderid and oi.customerid=${customerid}`
    return await sequelize.query(ordAndOrdDetailSql)
  }
  async uptOrdStatusByOrdId(orderid: number, orderstatus: number): Promise<[any, any]> {
    const uptOrdStatusSql = `update orderinfo set orderstatus=${orderstatus} where orderid=${orderid}`
    return await sequelize.query(uptOrdStatusSql)
  }
}
export default OrdAndOrdDetailDao.ordAndOrdDetailDao