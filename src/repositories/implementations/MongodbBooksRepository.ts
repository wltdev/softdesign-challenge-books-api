import { faker } from '@faker-js/faker'
import { Book } from '@/entities/Book'
import { IBooksRepository } from '../IBooksRespository'
import { BookModel } from '@/infra/mongodb/models/BookModel'

const docs: Book[] = [
  {
    title: faker.lorem.paragraph(),
    description: faker.lorem.text(),
    author: faker.name.fullName(),
    price: faker.random.numeric(),
    id: 'fake-id',
    rent: false
  },
  {
    title: faker.lorem.paragraph(),
    description: faker.lorem.text(),
    author: faker.name.fullName(),
    price: faker.random.numeric(),
    id: faker.database.mongodbObjectId(),
    rent: false
  },
  {
    title: faker.lorem.paragraph(),
    description: faker.lorem.text(),
    author: faker.name.fullName(),
    price: faker.random.numeric(),
    id: faker.database.mongodbObjectId(),
    rent: false
  }
]

export class MongodbBooksRepository implements IBooksRepository {
  async getList(search: string): Promise<Book[]> {
    const docs = await BookModel.find()
    return docs
  }

  findById(id: string): Promise<Book> {
    return new Promise((resolve) => {
      const find = docs.find((doc) => doc.id === 'fake-id')
      resolve(find)
    })
  }

  remove(id: string): Promise<void> {
    return new Promise(() => {})
  }

  store(payload: Book): Promise<Book> {
    return new Promise((resolve) => {
      docs.push(payload)
      resolve(payload)
    })
  }

  update(id: string, payload: Book): Promise<Book> {
    return new Promise((resolve) => {
      resolve(payload)
    })
  }
}
