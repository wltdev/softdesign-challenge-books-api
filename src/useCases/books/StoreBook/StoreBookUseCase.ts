import { IBooksRepository } from '@/repositories/IBooksRespository'
import { IStoreBookDto } from './StoreBookDTO'

export class StoreBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(payload: IStoreBookDto) {
    return this.booksRepository.store(payload)
  }
}
