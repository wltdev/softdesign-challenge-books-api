import { IBooksRepository } from '@/repositories/IBooksRespository'
import { IGetBooksDto } from './GetBooksDTO'

export class GetBooksUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute({ search }: IGetBooksDto) {
    return this.booksRepository.getList(search)
  }
}
