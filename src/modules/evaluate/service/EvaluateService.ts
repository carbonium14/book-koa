import evaluateDao from "../dao/EvaluateDao"
class EvaluateService {
  static evaluateService: EvaluateService = new EvaluateService()
  async findEvalReplyLst(isbn: string) {
    return await evaluateDao.findEvalReplyLst(isbn)
  }
}
export default EvaluateService.evaluateService