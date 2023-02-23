import { IBooksRepository } from '@/repositories/IBooksRespository'
import { IUpdateBookDto } from './UpdateBookDTO'

export class UpdateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string, payload: IUpdateBookDto) {
    return this.booksRepository.update(id, payload)
  }
}
