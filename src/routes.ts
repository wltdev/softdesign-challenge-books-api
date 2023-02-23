import { Router } from 'express'
import { signinFactory } from './useCases/auth/Signin/SigninFactory'
import { signupFactory } from './useCases/auth/Signup/SignupFactory'
import { getBookFactory } from './useCases/books/GetBook/GetBookFactory'
import { getBooksFactory } from './useCases/books/GetBooks/GetBooksFactory'
import { removeBookFactory } from './useCases/books/RemoveBook/RemoveBookFactory'
import { storeBookFactory } from './useCases/books/StoreBook/StoreBookFactory'
import { updateBookFactory } from './useCases/books/UpdateBook/UpdateBookFactory'

const router = Router()

router.post('/signup', (request, response, next) =>
  signupFactory.handle(request, response, next)
)

router.post('/signin', (request, response, next) =>
  signinFactory.handle(request, response, next)
)

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
