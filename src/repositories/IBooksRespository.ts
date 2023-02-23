import { Book } from '@/entities/Book'

export interface IBooksRepository {
  getList(search: string): Promise<Book[]>
  findById(id: string): Promise<Book>
  store(payload: Book): Promise<Book>
  update(id: string, payload: Book): Promise<Book>
  remove(id: string): Promise<void>
}
