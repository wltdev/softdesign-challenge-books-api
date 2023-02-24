import { Book } from '@/entities/Book'
import { CustomError } from '@/middlewares/errorMiddleware'
import { IBooksRepository } from '@/repositories/IBooksRespository'

export class UnRentBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string) {
    try {
      const payload = {
        renter: null
      } as Book

      const doc = await this.booksRepository.update(id, payload)
      return doc
    } catch (error) {
      throw new CustomError(error.message)
    }
  }
}
