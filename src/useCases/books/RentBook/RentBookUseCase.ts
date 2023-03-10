import { Book } from '@/entities/Book'
import { CustomError } from '@/middlewares/errorMiddleware'
import { IBooksRepository } from '@/repositories/IBooksRespository'

export class RentBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string, renter: string | null) {
    try {
      const book = await this.booksRepository.findById(id)

      if (book.renter) {
        throw new CustomError('That book was rented by other user', 400)
      }

      const payload = {
        renter
      } as Book

      const doc = await this.booksRepository.update(id, payload)
      return doc
    } catch (error) {
      throw new CustomError(error.message)
    }
  }
}
