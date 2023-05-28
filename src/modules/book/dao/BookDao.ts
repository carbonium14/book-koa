import { Op } from 'sequelize'
import { booksModel } from '../defmodel'
class BookDao {
  static bookDao: BookDao = new BookDao()
  findAllBooks(bookname: string) {
    return booksModel.findAll({
      raw: true,
      where: {
        bookname: {
          [Op.like]: `%${bookname}%`,
        },
      },
    })
  }
  findUserWithPager(offset: number, pageSize: number) {
    return booksModel.findAll({
      raw: true,
      limit: pageSize,
      offset,
    })
  }
}
export default BookDao.bookDao