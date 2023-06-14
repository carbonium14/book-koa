import { keywordModel } from '../defmodel/keyword'
import { historykeywordModel } from '../defmodel/historykeyword'
import { sequelize } from '../../BaseDao'
import { Op } from 'sequelize'
class KeywordDao {
  static keywordDao: KeywordDao = new KeywordDao()
  searchKeywords(key: string) {
    return keywordModel.findAll({
      raw: true,
      where: {
        keyword: {
          [Op.like]: `%${key}%`
        }
      }
    })
  }
  searchHistoryKeywords(historykeyword: string) {
    return historykeywordModel.findOne({
      raw: true,
      where: {
        historykeyword: {
          [Op.like]: `${historykeyword}`
        }
      }
    })
  }
  saveHistoryKeywords(historykeyword: string): Promise<[any, any]> {
    const sql = `insert into historykeyword(historykeyword,clickcount) values('${historykeyword}',1)`
    return sequelize.query(sql)
  }
  updateHistoryKeywordCount(historykeyword: string): Promise<[any, any]> {
    const sql = `update historykeyword set clickcount=clickcount+1 where historykeyword='${historykeyword}'`
    return sequelize.query(sql)
  }
  searchDescovery() {
    return historykeywordModel.findAll({
      order: [['clickcount', 'desc']],
      raw: true,
      offset: 0,
      limit: 6
    })
  }
  searchHistoryKeywordObjList() {
    return historykeywordModel.findAll({
      raw: true
    })
  }
  deleteDescovery(): Promise<[any, any]> {
    const sql = 'delete from historykeyword where id in (select id from (select * from historykeyword order by clickcount desc limit 0,6) as history_id)'
    return sequelize.query(sql)
  }
  deleteHistoryKeywords(): Promise<[any, any]> {
    const sql = 'delete from historykeyword'
    return sequelize.query(sql)
  }
}
export default KeywordDao.keywordDao