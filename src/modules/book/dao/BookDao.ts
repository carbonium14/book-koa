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
  async findBooksByThirdCtgyId(thirdctgyid: number) {
    return await booksModel.findAll({
      raw: true,
      where: {
        thirdctgyid
      }
    })
  }
  async findBooksBySecondCtgyId(secondctgyid: number) {
    return await booksModel.findAll({
      raw: true,
      where: {
        secondctgyid,
      },
    })
  }
}
export default BookDao.bookDao