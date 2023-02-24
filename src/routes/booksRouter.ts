import { Router } from 'express'

import { getBookFactory } from '../useCases/books/GetBook/GetBookFactory'
import { getBooksFactory } from '../useCases/books/GetBooks/GetBooksFactory'
import { removeBookFactory } from '../useCases/books/RemoveBook/RemoveBookFactory'
import { storeBookFactory } from '../useCases/books/StoreBook/StoreBookFactory'
import { updateBookFactory } from './../useCases/books/UpdateBook/UpdateBookFactory'
import { rentBookFactory } from '../useCases/books/RentBook/RentBookFactory'
import { unRentBookFactory } from '@/useCases/books/UnRentBook/UnRentBookFactory'

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
  updateBookFactory.handle(request, response, next)
)

booksRouter.delete('/:id', (request, response, next) =>
  removeBookFactory.handle(request, response, next)
)

booksRouter.put('/rent/:id', (request, response, next) => {
  rentBookFactory.handle(request, response, next)
})
booksRouter.put('/unrent/:id', (request, response, next) => {
  unRentBookFactory.handle(request, response, next)
})

export { booksRouter }
