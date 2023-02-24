import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { UnRentBookUseCase } from './UnRentBookUseCase'

jest.mock('@/repositories/implementations/MongodbBooksRepository')

describe('UnRentBookUseCase', () => {
  let unRentBookUseCase: UnRentBookUseCase

  beforeAll(() => {
    const repositoryMock = new MongodbBooksRepository()
    unRentBookUseCase = new UnRentBookUseCase(repositoryMock)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should be able to UnRent a book', async () => {
    const doc = await unRentBookUseCase.execute('fake-id')

    expect(doc).toHaveProperty('title')
  })
})
