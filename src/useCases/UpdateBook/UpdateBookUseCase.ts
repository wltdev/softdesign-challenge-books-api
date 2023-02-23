import { CustomError } from '@/middlewares/errorMiddleware'
import { IBooksRepository } from '@/repositories/IBooksRespository'
import { IUpdateBookDto } from './UpdateBookDTO'

export class UpdateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string, payload: IUpdateBookDto) {
    const book = await this.booksRepository.findById(id)

    if (book.rent) {
      throw new CustomError('That book was rented. Impossible to update')
    }

    return this.booksRepository.update(id, payload)
  }
}
