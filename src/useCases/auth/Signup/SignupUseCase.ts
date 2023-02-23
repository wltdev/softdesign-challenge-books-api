import jwt from 'jsonwebtoken'
import { CustomError } from '@/middlewares/errorMiddleware'
import { IUsersRepository } from '@/repositories/IUsersRepository'
import { ISignupDto } from './SignupDTO'
import { appConfig } from '@/config'

export class SignupUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(payload: ISignupDto) {
    try {
      const user = await this.usersRepository.store(payload)

      const token = jwt.sign({ username: user.username }, String(appConfig.secrets.jwt), {
        expiresIn: appConfig.secrets.jwtExp
      })

      return {
        user,
        token
      }
    } catch (error) {
      throw new CustomError(error.message)
    }
  }
}
