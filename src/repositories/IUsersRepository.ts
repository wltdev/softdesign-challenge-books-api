import { User } from '@/entities/User'

export interface IUsersRepository {
  findByUsername(id: string): Promise<User>
  store(payload: User): Promise<User>
}
