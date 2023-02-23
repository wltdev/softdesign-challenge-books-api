import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { StoreBookUseCase } from './StoreBookUseCase'

jest.mock('@/repositories/implementations/MongodbBooksRepository')

describe('StoreBookUseCase', () => {
  let storeBookUseCase: StoreBookUseCase

  beforeAll(() => {
    const repositoryMock = new MongodbBooksRepository()
    storeBookUseCase = new StoreBookUseCase(repositoryMock)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should return a list of books', async () => {
    const payload = {
      title: 'title book',
      author: 'Maria Tereza',
      description: 'book description',
      price: '10',
      rent: false
    }

    const doc = await storeBookUseCase.execute(payload)

    expect(doc).toHaveProperty('title')
  })
})
