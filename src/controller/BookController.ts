import { Context } from 'koa'
import { Controller } from '../decorator/controllerdecorator'
import { get, post } from '../decorator/reqmethoddecorator'
import bookService from '../modules/book/service/BookService'
import { success } from '../common/resResult'
@Controller('/booksmodule')
class BooksController {
  @get('/findBooksByThirdCtgyId/:thirdctgyid/:sortfield/:ascordesc')
  async findBooksByThirdCtgyId(ctx: Context) {
    const { thirdctgyid, sortfield, ascordesc } = ctx.params
    const result = await bookService.findBooksByThirdCtgyId(thirdctgyid, sortfield, ascordesc)
    ctx.body = success(result)
  }
  @get('/findBooksBySecondCtgyId/:secondctgyid/:sortfield/:ascordesc')
  async findBooksBySecondCtgyId(ctx: Context) {
    const { secondctgyid, sortfield, ascordesc } = ctx.params
    const result = await bookService.findBooksBySecondCtgyId(secondctgyid, sortfield, ascordesc)
    ctx.body = success(result)
  }
  @get('/findBooksByAutoCompKeyword/:autocompkeyword')
  async findBooksByAutoCompKeyword(ctx: Context) {
    const { autocompkeyword } = ctx.params
    const result = await bookService.findBooksByAutoCompKeyword(autocompkeyword)
    ctx.body = success(result)
  }
  @get('/findPublishersByAutoCompKey/:autocompkeyword')
  async findPublishersByAutoCompKey(ctx: Context) {
    const { autocompkeyword } = ctx.params
    const result = await bookService.findPublishersByAutoCompKey(autocompkeyword)
    ctx.body = success(result)
  }
  @post('/findBksByPublishIds')
  async findBksByPublishIds(ctx: Context) {
    const publishids: number[] = ctx.request.body
    const result = await bookService.findBksByPublishIds(publishids)
    ctx.body = success(result)
  }
  @get('/findBooksByISBN/:isbn')
  async findBooksByISBN(ctx: Context) {
    const { isbn } = ctx.params
    const result = await bookService.findBooksByISBN(isbn)
    ctx.body = success(result)
  }
  @get('/findBookLstWithPager/:curPageNo')
  async findBookLstWithPager(ctx: Context) {
    const { curPageNo } = ctx.params
    const result = await bookService.findBookLstWithPager(curPageNo)
    ctx.body = success(result)
  }
}