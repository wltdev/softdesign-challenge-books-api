import { CustomError } from '@/middlewares/errorMiddleware'
import { IBooksRepository } from '@/repositories/IBooksRespository'

export class RentBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string, renter: string) {
    const book = await this.booksRepository.findById(id)

    if (book.renter) {
      throw new CustomError('That book was rented. Impossible to Rent')
    }

    return this.booksRepository.update(id, { ...book, renter })
  }
}
