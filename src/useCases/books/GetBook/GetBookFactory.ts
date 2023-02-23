import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { GetBookController } from './GetBookController'
import { GetBookUseCase } from './GetBookUseCase'

function factory() {
  const repository = new MongodbBooksRepository()
  const useCase = new GetBookUseCase(repository)
  const controller = new GetBookController(useCase)

  return controller
}

export const getBookFactory = factory()
