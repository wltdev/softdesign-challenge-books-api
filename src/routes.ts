import { Router } from 'express'
import { getBooksFactory } from './useCases/GetBooks/GetBooksFactory'
// import { singinController } from './useCases/Signin'

const router = Router()

// router.post('/signin', (request, response) => {
//   return singinController.handle(request, response)
// })

// router.post('/signup', (request, response) => {
//   return signupContoller.handle(request, response)
// })

router.get('/books', (request, response, next) =>
  getBooksFactory.handle(request, response, next)
)

export { router }
