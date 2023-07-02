import { EleOfArr, combine, combineRelative, getNoReptItem, getSubItemFrmArr } from '../commonTypes'
type SecThrCtgyList = {
  secondCtgyId: number,
  secondCtgyName: string,
  firstCtgyId: number,
  secCtgyId: number,
  thirdCtgyId: number,
  thirdName: string
}[]
export default function convert(secThrCtgyList: SecThrCtgyList) {
  const secCtgyList = getSubItemFrmArr(secThrCtgyList, 'secondCtgyId', 'secondCtgyName')
  const noReptSecCtgyList = getNoReptItem(secCtgyList, 'secondCtgyId')
  const thrdCtgyList = getSubItemFrmArr(secThrCtgyList, 'thirdCtgyId', 'thirdName', 'secCtgyId')
  const relativeSecThrCtgyList = combineRelative(noReptSecCtgyList, 'thirdCtgys', [])
  const lastSecThrCtgyList: typeof relativeSecThrCtgyList = []
  type LastSecThrCtgy = EleOfArr<typeof relativeSecThrCtgyList>
  noReptSecCtgyList.map((noReptSecCtgy) => {
    const lastThrdList: typeof thrdCtgyList = []
    thrdCtgyList.forEach((thrdCtgy) => {
      if (noReptSecCtgy.secondCtgyId === thrdCtgy.secCtgyId) {
        lastThrdList.push({
          thirdCtgyId: thrdCtgy.thirdCtgyId,
          thirdName: thrdCtgy.thirdName,
          secCtgyId: thrdCtgy.secCtgyId
        })
      }
    })
    const lastSecThrCtgy: LastSecThrCtgy = combine(noReptSecCtgy, {
      thirdCtgys: lastThrdList
    })
    lastSecThrCtgyList.push(lastSecThrCtgy)
  })
  return lastSecThrCtgyList
}