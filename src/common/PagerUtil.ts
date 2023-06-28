import { toNumber } from "lodash"
import { Sequelize } from "sequelize-typescript"
class Pager {
  static pager: Pager = new Pager()
  private firstRecNoCurPage!: number
  private pagesize: number = 4
  private curPageNo: number = 1
  private totalPageNum: number = 0
  private curPageDataList!: any[]
  getFirstRecCurPage(curPageNo: string, pageSize: string = '0') {
    this.curPageNo = toNumber(curPageNo) || this.curPageNo
    this.pagesize = toNumber(pageSize) || this.pagesize
    this.firstRecNoCurPage = (this.curPageNo - 1) * this.pagesize
    return this.firstRecNoCurPage
  }
  getTotalPageNum(totalRecNum: number) {
    if (totalRecNum % this.pagesize === 0) {
      this.totalPageNum = totalRecNum / this.pagesize
    } else {
      this.totalPageNum = Math.floor(totalRecNum / this.pagesize) + 1
    }
    return this.totalPageNum
  }
  get PageSize() {
    return this.pagesize
  }
  saveCurPageData(curPageDataList: any[]) {
    this.curPageDataList = curPageDataList 
  }
  getCurPageData() {
    return {
      curPageNo: this.curPageNo,
      curPageDataList: this.curPageDataList,
      totalPageNum: this.totalPageNum
    }
  }
}
const pager = Pager.pager
export default pager
type PageParamsType = [curPageNo: string, basePagerSql: string, recTotalNumSql: string, countPageField: string]
export function pageDecorator(sequelize: Sequelize) {
  return (targetPrototype: (...args: any[]) => any, methodName: string, dataProps: PropertyDescriptor) => {
    const targetMethod = dataProps.value
    dataProps.value = async (...args: PageParamsType) => {
      const [curPageNo, basePagerSql, recTotalNumSql, countPageField] = args
      const firstRecNo = pager.getFirstRecCurPage(curPageNo)
      const sql = `${basePagerSql} ${firstRecNo},${pager.PageSize}`
      const curPageDataList = (await sequelize.query(sql))[0]
      const totalRecNumObj = (await sequelize.query(`${recTotalNumSql}`))[0][0] as any
      pager.getTotalPageNum(totalRecNumObj[`count(${countPageField})`])
      pager.saveCurPageData(curPageDataList)
    }
  }
}
