import { sequelize } from "../../BaseDao"
class ReplyDao {
  static replyDao: ReplyDao = new ReplyDao()
  async addReply(reply: any): Promise<[any, any]> {
    const sql = `insert into reply(replycontent,replydate,evalid,replyor) values('${reply.replycontent}','${reply.strReplyDate}',${reply.evalid},'${reply.replyor}')`
    return await sequelize.query(sql)
  }
}
export default ReplyDao.replyDao