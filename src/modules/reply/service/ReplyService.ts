import { combine } from "../../commonTypes"
import replyDao from "../dao/ReplyDao"
class ReplyService {
  static replyService: ReplyService = new ReplyService()
  async addReply(reply: any) {
    const dbreply = await replyDao.addReply(reply)
    return combine({ replyid: dbreply[0] }, reply) 
  }
}
export default ReplyService.replyService