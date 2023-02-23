import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { RemoveBookController } from './RemoveBookController'
import { RemoveBookUseCase } from './RemoveBookUseCase'

function factory() {
  const repository = new MongodbBooksRepository()
  const useCase = new RemoveBookUseCase(repository)
  const controller = new RemoveBookController(useCase)

  return controller
}

export const removeBookFactory = factory()
