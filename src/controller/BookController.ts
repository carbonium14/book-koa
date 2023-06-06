import { Context } from 'koa'
import { Controller } from '../decorator/controllerdecorator'
import { get } from '../decorator/reqmethoddecorator'
import BookDao from '../modules/book/dao/BookDao'
import { success } from '../common/resResult'
@Controller('/booksmodule')
class BooksController {
  @get('/findBooksByThirdCtgyId/:thirdctgyid/:sortfield/:ascordesc')
  async findBooksByThirdCtgyId(ctx: Context) {
    const { thirdctgyid, sortfield, ascordesc } = ctx.params
    const result = await BookDao.findBooksByThirdCtgyId(thirdctgyid, sortfield, ascordesc)
    ctx.body = success(result)
  }
  @get('/findBooksBySecondCtgyId/:secondctgyid/:sortfield/:ascordesc')
  async findBooksBySecondCtgyId(ctx: Context) {
    const { secondctgyid, sortfield, ascordesc } = ctx.params
    const result = await BookDao.findBooksBySecondCtgyId(secondctgyid, sortfield, ascordesc)
    ctx.body = success(result)
  }
}