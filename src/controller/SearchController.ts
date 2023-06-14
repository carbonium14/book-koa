import { Context } from 'koa'
import { Controller } from '../decorator/controllerdecorator'
import { get, post } from '../decorator/reqmethoddecorator'
import searchService from '../modules/search/service/SearchService'
import { success } from '../common/resResult'
@Controller('/searchmodule')
class SearchController {
  @post('/addOrUpdateHistoryKeyword')
  async addOrUpdateHistoryKeyword(ctx: Context) {
    const { historykeyword } = ctx.request.body
    const result= await searchService.addOrUpdateHistoryKeyword(historykeyword)
    ctx.body = success(result)
  }
  @get('/searchKeywords/:key')
  async searchKeywords(ctx: Context) {
    const { key } = ctx.params
    const result = await searchService.searchKeywords(key)
    ctx.body = success(result)
  }
  @get('/searchDescovery')
  async searchDescovery(ctx: Context) {
    const result = await searchService.searchDescovery()
    ctx.body = success(result)
  }
  @get('/searchHistoryKeywordObjList')
  async searchHistoryKeywordObjList(ctx: Context) {
    const result = await searchService.searchHistoryKeywordObjList()
    ctx.body = success(result)
  }
  @get('/deleteDescovery')
  async deleteDescovery(ctx: Context) {
    const result = await searchService.deleteDescovery()
    ctx.body = success(result)
  }
  @get('/deleteHistoryKeywords')
  async deleteHistoryKeywords(ctx: Context) {
    const result = await searchService.deleteHistoryKeywords()
    ctx.body = success(result)
  }
}