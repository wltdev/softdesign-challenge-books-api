import { User } from '@/entities/User'
import { UserModel } from '@/infra/database/mongodb/models/UserModel'
import { IUsersRepository } from '../IUsersRepository'

export class MongodbUsersRepository implements IUsersRepository {
  async findByUsername(username: string): Promise<User> {
    return UserModel.findOne({ username })
  }

  async store(payload: User): Promise<User> {
    const doc = new UserModel(payload)
    await doc.save()
    return doc
  }
}
