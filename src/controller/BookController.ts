import { Context } from 'koa'
import { Controller } from '../decorator/controllerdecorator'
import { get } from '../decorator/reqmethoddecorator'
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
}