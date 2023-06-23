import { evaluateModel } from "../defmodel/index"
import { replyModel } from "../../reply/defmodel/index"
import { sequelize } from "../../BaseDao"
import convert from "../convert"
class EvaluateDao {
  static evaluateDao: EvaluateDao = new EvaluateDao()
  async findEvalReplyLst(isbn: string) {
    const sql = `select * from evaluate e left outer join book.reply r on e.evaluateid=r.evalid where e.isbn='${isbn}'`
    const evalReplyLst: any[] = (await sequelize.query(sql))[0]
    return convert(evalReplyLst)
  }
}
export default EvaluateDao.evaluateDao