import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { UpdateBookUseCase } from './UpdateBookUseCase'

jest.mock('@/repositories/implementations/MongodbBooksRepository')

describe('UpdateBookUseCase', () => {
  let updateBookUseCase: UpdateBookUseCase

  beforeAll(() => {
    const repositoryMock = new MongodbBooksRepository()
    updateBookUseCase = new UpdateBookUseCase(repositoryMock)
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

    const doc = await updateBookUseCase.execute('fake-id', payload)

    expect(doc).toHaveProperty('title')
  })
})
