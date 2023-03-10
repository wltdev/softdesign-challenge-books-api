const book = {
  title: 'title book',
  author: 'Maria Tereza',
  description: 'book description',
  price: '10'
}

export const MongodbBooksRepository = jest.fn().mockReturnValue({
  getList: jest.fn(() => Promise.resolve([book])),
  findById: jest.fn(() => Promise.resolve(book)),
  store: jest.fn(() => Promise.resolve(book)),
  update: jest.fn(() =>
    Promise.resolve({
      ...book,
      renter: {
        username: 'jose alugador'
      }
    })
  ),
  remove: jest.fn(() => Promise.resolve())
})
