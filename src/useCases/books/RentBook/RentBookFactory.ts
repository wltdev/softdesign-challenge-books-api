import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { RentBookController } from './RentBookController'
import { RentBookUseCase } from './RentBookUseCase'

function factory() {
  const repository = new MongodbBooksRepository()
  const useCase = new RentBookUseCase(repository)
  const controller = new RentBookController(useCase)

  return controller
}

export const rentBookFactory = factory()
