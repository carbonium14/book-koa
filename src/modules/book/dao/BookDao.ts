import { Op } from 'sequelize'
import { booksModel } from '../defmodel'
import pager, { pageDecorator } from '../../../common/PagerUtil'
import { sequelize } from '../../BaseDao'
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
  async findBooksByISBN(ISBN: string) {
    return await booksModel.findOne({
      raw: true,
      where: {
        ISBN
      }
    })
  }
  async findBookLstWithPager(curPageNo: string) {
    const basePagerSql = 'select * from books limit '
    const recTotalNumSql = 'select count(ISBN) from books'
    const countPageField = 'ISBN'
    await this.bookPager(curPageNo, basePagerSql, recTotalNumSql, countPageField)
    return pager.getCurPageData()
  }
  //@ts-ignore
  @pageDecorator(sequelize)
  bookPager(curPageNo: string, basePagerSql: string, recTotalNumSql: string, countPageField: string) {}
}
export default BookDao.bookDao