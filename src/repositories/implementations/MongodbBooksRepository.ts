import { Book } from '@/entities/Book'
import { IBooksRepository } from '../IBooksRespository'
import { BookModel } from '@/infra/database/mongodb/models/BookModel'
import { CustomError } from '@/middlewares/errorMiddleware'

export interface BookQuery {
  title: RegExp
}

export class MongodbBooksRepository implements IBooksRepository {
  async getList(search: string): Promise<Book[]> {
    let find = {} as BookQuery

    if (search) {
      const term = new RegExp(search, 'i')
      find = {
        title: term
      }
    }
    const docs = await BookModel.find(find).populate('renter', '-password')
    return docs
  }

  async findById(id: string): Promise<Book> {
    return BookModel.findById(id).populate('renter', '-password')
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
    try {
      const doc = await BookModel.findByIdAndUpdate(id, payload, {
        new: true
      })
      return doc
    } catch (error) {
      throw new CustomError(error.message)
    }
  }
}
