import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { UpdateBookController } from './UpdateBookController'
import { UpdateBookUseCase } from './UpdateBookUseCase'

function factory() {
  const repository = new MongodbBooksRepository()
  const useCase = new UpdateBookUseCase(repository)
  const controller = new UpdateBookController(useCase)

  return controller
}

export const updateBookFactory = factory()
