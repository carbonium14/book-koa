import { getSubItemFrmArr, getNoReptItem, combine } from "../commonTypes"
function getEvalLst(evalLst: any) {
  //@ts-ignore
  return getSubItemFrmArr(evalLst, 'evaluateid', 'content', 'evaluator', 'isbn', 'headportrai', 'givealikenum', 'evaluatedegree', 'pubdate', 'isanonymous')
}
function getRplLst(evalReplyLst: any) {
  //@ts-ignore
  return getSubItemFrmArr(evalReplyLst, 'replyid', 'replycontent', 'replydate', 'evalid', 'replyor')
}
export default function convert(evalReplyLst: any) {
  const evalLst = getEvalLst(evalReplyLst)
  //@ts-ignore
  const noRepeatEvalLst = getNoReptItem(evalLst, 'evaluateid')
  const replyLst = getRplLst(evalReplyLst)
  //@ts-ignore
  const evalRelLastLst = []
  noRepeatEvalLst.forEach((noRepeatEval) => {
    //@ts-ignore
    const lastRplLst = []
    replyLst.forEach((reply) => {
      //@ts-ignore
      if (noRepeatEval.evaluateid === reply.evalid) {
        lastRplLst.push(reply)
      }
    })
    //@ts-ignore
    const evalRplItemComb = combine(noRepeatEval, { replyLst: lastRplLst })
    evalRelLastLst.push(evalRplItemComb)
  })
  //@ts-ignore
  return evalRelLastLst
}