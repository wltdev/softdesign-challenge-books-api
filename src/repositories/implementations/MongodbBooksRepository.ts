import { Book } from '@/entities/Book'
import { IBooksRepository } from '../IBooksRespository'
import { BookModel } from '@/infra/database/mongodb/models/BookModel'

export class MongodbBooksRepository implements IBooksRepository {
  async getList(search: string): Promise<Book[]> {
    const docs = await BookModel.find()
    return docs
  }

  async findById(id: string): Promise<Book> {
    return BookModel.findById(id)
  }

  async remove(id: string): Promise<void> {
    return BookModel.findByIdAndRemove(id)
  }

  async store(payload: Book): Promise<Book> {
    const doc = new BookModel(payload)
    await doc.save()

    return doc
  }

  async update(id: string, payload: Book): Promise<Book> {
    const doc = await BookModel.findByIdAndUpdate(id, payload, {
      new: true
    })
    return doc
  }
}
