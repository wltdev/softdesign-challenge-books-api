import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { GetBookUseCase } from './GetBookUseCase'

jest.mock('@/repositories/implementations/MongodbBooksRepository')

describe('GetBookUseCase', () => {
  let getBookUseCase: GetBookUseCase

  beforeAll(() => {
    const repositoryMock = new MongodbBooksRepository()
    getBookUseCase = new GetBookUseCase(repositoryMock)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should return a book', async () => {
    const doc = await getBookUseCase.execute({ id: 'fake-id' })

    const expectedResponse = {
      title: 'title book',
      author: 'Maria Tereza',
      description: 'book description',
      price: '10',
      rent: false
    }

    expect(doc).toEqual(expectedResponse)
  })
})
