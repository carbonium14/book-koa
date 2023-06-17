import { Op } from 'sequelize'
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
  async findBooksByAutoCompKeyword(autoCompKeyword: string) {
    return await booksModel.findAll({
      raw: true,
      where: {
        bookname: {
          [Op.like]: `%${autoCompKeyword}%`
        }
      }
    })
  }
  async findPublishersByAutoCompKey(autoCompKeyword: string) {
    return await booksModel.findAll({
      attributes: ['publishid', 'publishername'],
      raw: true,
      where: {
        bookname: {
          [Op.like]: `%${autoCompKeyword}%`
        }
      }
    })
  }
  async findBksByPublishIds(publishids: number[]) {
    return await booksModel.findAll({
      raw: true,
      where: {
        publishid: {
          [Op.in]: publishids
        }
      }
    })
  }
}
export default BookDao.bookDao