import bookDao from '../dao/BookDao'
class BookService {
  static bookService: BookService = new BookService()
  async getBooksWithRanking() {
    const books = await bookDao.findAllBook()
    return books.map((book: any, index: number) => {
      return {
        ISBN: book.ISBN,
        ranking: index + 1
      }
    })
  }
  async combineBooksWithRanking(bookList: any) {
    const ranking = await this.getBooksWithRanking()
    bookList.map((book: any) => {
      ranking.forEach(({ISBN, ranking}: any) => {
        if (book.ISBN === ISBN) {
          book.ranking = ranking
        }
      })
    })
  }
  async findBooksByThirdCtgyId(thirdctgyid: number, sortField: string = 'ISBN', ascOrDesc: string = 'asc') {
    const books = await bookDao.findBooksByThirdCtgyId(thirdctgyid, sortField, ascOrDesc)
    await this.combineBooksWithRanking(books)
    return books
  }
  async findBooksBySecondCtgyId(secondctgyid: number, sortField: string = 'ISBN', ascOrDesc: string = 'asc') {
    const books = await bookDao.findBooksBySecondCtgyId(secondctgyid, sortField, ascOrDesc)
    await this.combineBooksWithRanking(books)
    return books
  }
}
export default BookService.bookService