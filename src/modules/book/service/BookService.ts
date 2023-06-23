import bookDao from '../dao/BookDao'
import { getNoReptItem } from '../../commonTypes'
class BookService {
  static bookService: BookService = new BookService()
  async findBooksByThirdCtgyId(thirdctgyid: number, sortField: string = 'ISBN', ascOrDesc: string = 'asc') {
    const books = await bookDao.findBooksByThirdCtgyId(thirdctgyid, sortField, ascOrDesc)
    await combineBooksWithRanking(books)
    return books
  }
  async findBooksBySecondCtgyId(secondctgyid: number, sortField: string = 'ISBN', ascOrDesc: string = 'asc') {
    const books = await bookDao.findBooksBySecondCtgyId(secondctgyid, sortField, ascOrDesc)
    await combineBooksWithRanking(books)
    return books
  }
  async findBooksByAutoCompKeyword(autoCompKeyword: string) {
    const books = await bookDao.findBooksByAutoCompKeyword(autoCompKeyword)
    await combineBooksWithRanking(books)
    return books
  }
  async findPublishersByAutoCompKey(autoCompKeyword: string) {
    const books = await bookDao.findPublishersByAutoCompKey(autoCompKeyword)
    //@ts-ignore
    return getNoReptItem(books, 'publishid')
  }
  async findBksByPublishIds(publishids: number[]) {
    const books = await bookDao.findBksByPublishIds(publishids)
    await combineBooksWithRanking(books)
    return books
  }
  async findBooksByISBN(ISBN: string) {
    return await bookDao.findBooksByISBN(ISBN)
  }
}
export default BookService.bookService
async function getBooksWithRanking() {
  const books = await bookDao.findAllBook()
  return books.map((book: any, index: number) => {
    return {
      ISBN: book.ISBN,
      ranking: index + 1
    }
  })
}
async function combineBooksWithRanking(bookList: any) {
  const ranking = await getBooksWithRanking()
  bookList.map((book: any) => {
    ranking.forEach(({ISBN, ranking}: any) => {
      if (book.ISBN === ISBN) {
        book.ranking = ranking
      }
    })
  })
}