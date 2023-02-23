import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { RemoveBookUseCase } from './RemoveBookUseCase'

jest.mock('@/repositories/implementations/MongodbBooksRepository')

describe('RemoveBookUseCase', () => {
  let removeBookUseCase: RemoveBookUseCase

  beforeAll(() => {
    const repositoryMock = new MongodbBooksRepository()
    removeBookUseCase = new RemoveBookUseCase(repositoryMock)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should return a list of books', async () => {
    const doc = await removeBookUseCase.execute('fake-id')

    expect(doc).toBeUndefined()
  })
})
