import { booksModel } from '../defmodel'
class BookDao {
  static bookDao: BookDao = new BookDao()
  async findBooksByThirdCtgyId(thirdctgyid: number, sortField: string = 'ISBN', ascOrDesc: string = 'asc') {
    return await booksModel.findAll({
      order: [[sortField, ascOrDesc]],
      raw: true,
      where: {
        thirdctgyid
      }
    })
  }
  async findBooksBySecondCtgyId(secondctgyid: number, sortField: string = 'ISBN', ascOrDesc: string = 'asc') {
    return await booksModel.findAll({
      order: [[sortField, ascOrDesc]],
      raw: true,
      where: {
        secondctgyid,
      },
    })
  }
  async findAllBook() {
    return await booksModel.findAll({
      order: [['monthsalecount', 'desc']],
      raw: true
    })
  }
}
export default BookDao.bookDao