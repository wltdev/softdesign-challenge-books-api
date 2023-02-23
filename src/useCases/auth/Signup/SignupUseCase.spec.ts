import { MongodbUsersRepository } from '@/repositories/implementations/MongodbUsersRepository'
import { SignupUseCase } from './SignupUseCase'

jest.mock('@/repositories/implementations/MongodbUsersRepository')

describe('SignupUseCase', () => {
  let signupUseCase: SignupUseCase

  beforeAll(() => {
    const repositoryMock = new MongodbUsersRepository()
    signupUseCase = new SignupUseCase(repositoryMock)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should be able to signup new user', async () => {
    const doc = await signupUseCase.execute({
      username: 'fakeuser',
      password: 'fakepassword'
    })

    expect(doc).toHaveProperty('token')
  })
})
