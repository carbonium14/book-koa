import searchDao from '../dao/SearchDao'
class SearchService {
  static searchService: SearchService = new SearchService()
  async addOrUpdateHistoryKeyword(historykeyword: string) {
    const dbHistoryKeyword = await searchDao.searchHistoryKeywords(historykeyword)
    if (dbHistoryKeyword) {
      const result: [{ affectedRows: number }, any] = await searchDao.updateHistoryKeywordCount(historykeyword)
      return result[0].affectedRows
    } else {
      const result: [number, number] = await searchDao.saveHistoryKeywords(historykeyword)
      return result[0]
    }
  }
  async searchKeywords(key: string) {
    return await searchDao.searchKeywords(key)
  }
  async searchDescovery() {
    return await searchDao.searchDescovery()
  }
  async searchHistoryKeywordObjList() {
    return await searchDao.searchHistoryKeywordObjList()
  }
  async deleteDescovery() {
    const result: [{ affectedRows: number }, any] = await searchDao.deleteDescovery()
    return result[0].affectedRows
  }
  async deleteHistoryKeywords() {
    const result: [{ affectedRows: number }, any] = await searchDao.deleteHistoryKeywords()
    return result[0].affectedRows
  }
}
export default SearchService.searchService