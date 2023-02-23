import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { StoreBookController } from './StoreBookController'
import { StoreBookUseCase } from './StoreBookUseCase'

function factory() {
  const repository = new MongodbBooksRepository()
  const useCase = new StoreBookUseCase(repository)
  const controller = new StoreBookController(useCase)

  return controller
}

export const storeBookFactory = factory()
