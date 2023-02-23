const user = {
  username: 'jose',
  isValidPassword: jest.fn().mockResolvedValue(true)
}

export const MongodbUsersRepository = jest.fn().mockReturnValue({
  findByUsername: jest.fn(() => Promise.resolve(user)),
  store: jest.fn(() => Promise.resolve(user))
})
