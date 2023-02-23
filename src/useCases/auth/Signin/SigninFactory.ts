import { MongodbUsersRepository } from '@/repositories/implementations/MongodbUsersRepository'
import { SigninController } from './SigninController'
import { SigninUseCase } from './SigninUseCase'

function factory() {
  const repository = new MongodbUsersRepository()
  const useCase = new SigninUseCase(repository)
  const controller = new SigninController(useCase)

  return controller
}

export const signinFactory = factory()
