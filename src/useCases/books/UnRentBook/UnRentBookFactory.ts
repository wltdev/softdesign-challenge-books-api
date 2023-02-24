import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { UnRentBookController } from './UnRentBookController'
import { UnRentBookUseCase } from './UnRentBookUseCase'

function factory() {
  const repository = new MongodbBooksRepository()
  const useCase = new UnRentBookUseCase(repository)
  const controller = new UnRentBookController(useCase)

  return controller
}

export const unRentBookFactory = factory()
