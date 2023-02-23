import { IBooksRepository } from '@/repositories/IBooksRespository'

export class RemoveBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string) {
    return this.booksRepository.remove(id)
  }
}
