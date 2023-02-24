import { CustomError } from '@/middlewares/errorMiddleware'
import { IBooksRepository } from '@/repositories/IBooksRespository'

export class RemoveBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string) {
    const book = await this.booksRepository.findById(id)

    if (book.renter) {
      throw new CustomError('That book was rented. Impossible to remove')
    }

    return this.booksRepository.remove(id)
  }
}
