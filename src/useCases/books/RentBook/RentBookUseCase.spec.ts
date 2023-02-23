import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { RentBookUseCase } from './RentBookUseCase'

jest.mock('@/repositories/implementations/MongodbBooksRepository')

describe('RentBookUseCase', () => {
  let rentBookUseCase: RentBookUseCase

  beforeAll(() => {
    const repositoryMock = new MongodbBooksRepository()
    rentBookUseCase = new RentBookUseCase(repositoryMock)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should be able to rent a book', async () => {
    const doc = await rentBookUseCase.execute('fake-id', 'faker-user-id')

    expect(doc).toHaveProperty('renter')
  })
})
