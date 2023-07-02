import { EleOfArr, combine, combineRelative, getNoReptItem, getSubItemFrmArr } from '../commonTypes'
import { OrdAndOrdDetailLst } from './defmodel/entity'
export default function convert(ordAndOrdDetailLst: OrdAndOrdDetailLst) {
  const orderinfoList = getSubItemFrmArr(ordAndOrdDetailLst, 'orderid', 'ordertime', 'customerid', 'orderstatus')
  const noReptOrdLst = getNoReptItem(orderinfoList, 'orderid')
  const ordDetailLst = getSubItemFrmArr(ordAndOrdDetailLst, 'orderid', 'bookname', 'bookpicname', 'bookprice', 'orderdetailid', 'purcharsenum')
  const relativeOrdAndDetailLst = combineRelative(noReptOrdLst, 'orderDetailList', [])
  const lastRelativeOrdAndDetailLst: typeof relativeOrdAndDetailLst = []
  type relativeOrdAndDetail = EleOfArr<typeof relativeOrdAndDetailLst>
  noReptOrdLst.map((noReptOrd) => {
    const lastOrdDetailList: typeof ordDetailLst = []
    ordDetailLst.forEach((ordDetail) => {
      if (ordDetail.orderid === noReptOrd.orderid) {
        lastOrdDetailList.push({
          orderid: ordDetail.orderid,
          bookname: ordDetail.bookname,
          bookpicname: ordDetail.bookpicname,
          purcharsenum: ordDetail.purcharsenum,
          orderdetailid: ordDetail.orderdetailid,
          bookprice: ordDetail.bookprice
        })
      }
    })
    const lastRelativeOrdAndDetail: relativeOrdAndDetail = combine(noReptOrd, { orderDetailList: lastOrdDetailList })
    lastRelativeOrdAndDetailLst.push(lastRelativeOrdAndDetail)
  })
  return lastRelativeOrdAndDetailLst
}