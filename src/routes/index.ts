import { authMiddleware } from './../middlewares/authMiddleware'
import { Router } from 'express'
import { signinFactory } from '../useCases/auth/Signin/SigninFactory'
import { signupFactory } from '../useCases/auth/Signup/SignupFactory'
import { booksRouter } from './booksRouter'

const router = Router()

router.post('/signup', (request, response, next) =>
  signupFactory.handle(request, response, next)
)

router.post('/signin', (request, response, next) =>
  signinFactory.handle(request, response, next)
)

router.use('/books', authMiddleware, booksRouter)

export { router }
