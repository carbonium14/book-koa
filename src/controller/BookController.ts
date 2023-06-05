import { Context } from 'koa'
import { Controller } from '../decorator/controllerdecorator'
import { get } from '../decorator/reqmethoddecorator'
import BookDao from '../modules/book/dao/BookDao'
import { success } from '../common/resResult'
@Controller('/booksmodule')
class BooksController {
  @get('/findBooksByThirdCtgyId/:thirdctgyid')
  async findBooksByThirdCtgyId(ctx: Context) {
    const { thirdctgyid } = ctx.params
    const result = await BookDao.findBooksByThirdCtgyId(thirdctgyid)
    ctx.body = success(result)
  }
  @get('/findBooksBySecondCtgyId/:secondctgyid')
  async findBooksBySecondCtgyId(ctx: Context) {
    const { secondctgyid } = ctx.params
    const result = await BookDao.findBooksBySecondCtgyId(secondctgyid)
    ctx.body = success(result)
  }
}