import { Router } from 'express'
import { getBookFactory } from './useCases/GetBook/GetBookFactory'
import { getBooksFactory } from './useCases/GetBooks/GetBooksFactory'
import { removeBookFactory } from './useCases/RemoveBook/RemoveBookFactory'
import { storeBookFactory } from './useCases/StoreBook/StoreBookFactory'
import { updateBookFactory } from './useCases/UpdateBook/UpdateBookFactory'

const router = Router()

router.get('/books', (request, response, next) =>
  getBooksFactory.handle(request, response, next)
)

router.post('/books', (request, response, next) =>
  storeBookFactory.handle(request, response, next)
)

router.get('/books/:id', (request, response, next) =>
  getBookFactory.handle(request, response, next)
)

router.put('/books/:id', (request, response, next) =>
  updateBookFactory.handle(request, response, next)
)

router.delete('/books/:id', (request, response, next) =>
  removeBookFactory.handle(request, response, next)
)

export { router }
