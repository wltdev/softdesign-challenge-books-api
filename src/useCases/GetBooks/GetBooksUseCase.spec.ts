import { MongodbBooksRepository } from '@/repositories/implementations/MongodbBooksRepository'
import { GetBooksUseCase } from './GetBooksUseCase'

jest.mock('@/repositories/implementations/MongodbBooksRepository')

describe('GetBooksUseCase', () => {
  let getBooksUseCase: GetBooksUseCase

  beforeAll(() => {
    const repositoryMock = new MongodbBooksRepository()
    getBooksUseCase = new GetBooksUseCase(repositoryMock)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should return a list of books', async () => {
    const docs = await getBooksUseCase.execute({ search: 'term' })

    const expectedResponse = {
      title: 'title book',
      author: 'Maria Tereza',
      description: 'book description',
      price: '10',
      rent: false
    }

    expect(docs).toEqual([expectedResponse])
  })
})
