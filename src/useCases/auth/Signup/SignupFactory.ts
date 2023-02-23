import { MongodbUsersRepository } from '@/repositories/implementations/MongodbUsersRepository'
import { SignupController } from './SignupController'
import { SignupUseCase } from './SignupUseCase'

function factory() {
  const repository = new MongodbUsersRepository()
  const useCase = new SignupUseCase(repository)
  const controller = new SignupController(useCase)

  return controller
}

export const signupFactory = factory()
