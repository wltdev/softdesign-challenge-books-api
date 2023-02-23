import { Router } from 'express'

import { getBookFactory } from '../useCases/books/GetBook/GetBookFactory'
import { getBooksFactory } from '../useCases/books/GetBooks/GetBooksFactory'
import { removeBookFactory } from '../useCases/books/RemoveBook/RemoveBookFactory'
import { storeBookFactory } from '../useCases/books/StoreBook/StoreBookFactory'
import { RentBookFactory } from '../useCases/books/RentBook/RentBookFactory'

const booksRouter = Router()

booksRouter.get('/', (request, response, next) =>
  getBooksFactory.handle(request, response, next)
)

booksRouter.post('/', (request, response, next) =>
  storeBookFactory.handle(request, response, next)
)

booksRouter.get('/:id', (request, response, next) =>
  getBookFactory.handle(request, response, next)
)

booksRouter.put('/:id', (request, response, next) =>
  RentBookFactory.handle(request, response, next)
)

booksRouter.delete('/:id', (request, response, next) =>
  removeBookFactory.handle(request, response, next)
)

// booksRouter.put('/renter/:id', (request, response, next) => {

// })

export { booksRouter }
