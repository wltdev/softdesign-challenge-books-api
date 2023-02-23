import { IBooksRepository } from '@/repositories/IBooksRespository'
import { IGetBookDto } from './GetBookDTO'

export class GetBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute({ id }: IGetBookDto) {
    return this.booksRepository.findById(id)
  }
}
