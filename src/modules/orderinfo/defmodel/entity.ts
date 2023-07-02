export type OrderInfo = {
  orderid?: number,
  ordertime: string,
  customerid: number,
  orderstatus: number,
  orderDetailList?: OrderDetail[]
}
export type OrderDetail = {
  orderdetailid?: number,
  bookname: string,
  bookprice: string,
  bookpicname: string,
  purcharsenum: number,
  orderid?: number,
  shopcartid?: number
}
export type OrdAndOrdDetailLst = {
  orderid: number,
  ordertime: string,
  customerid: number,
  orderstatus: number,
  bookname: string,
  bookpicname: string,
  bookprice: string,
  purcharsenum: number,
  orderdetailid: number,
}[]