import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { GetBooksController } from './GetBooksController'
import { GetBooksUseCase } from './GetBooksUseCase'

function factory() {
  const repository = new MongodbBooksRepository()
  const useCase = new GetBooksUseCase(repository)
  const controller = new GetBooksController(useCase)

  return controller
}

export const getBooksFactory = factory()
