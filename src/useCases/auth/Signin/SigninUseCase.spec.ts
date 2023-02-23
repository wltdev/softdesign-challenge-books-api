import { MongodbUsersRepository } from '@/repositories/implementations/MongodbUsersRepository'
import { SigninUseCase } from './SigninUseCase'

jest.mock('@/repositories/implementations/MongodbUsersRepository')

describe('SigninUseCase', () => {
  let signinUseCase: SigninUseCase

  beforeAll(() => {
    const repositoryMock = new MongodbUsersRepository()
    signinUseCase = new SigninUseCase(repositoryMock)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should be able to Signin', async () => {
    const doc = await signinUseCase.execute({
      username: 'fakeuser',
      password: 'fakepassword'
    })

    expect(doc).toHaveProperty('token')
  })
})
