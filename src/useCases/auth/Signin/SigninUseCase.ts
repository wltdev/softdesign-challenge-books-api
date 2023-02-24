import jwt from 'jsonwebtoken'
import { CustomError } from '@/middlewares/errorMiddleware'
import { IUsersRepository } from '@/repositories/IUsersRepository'
import { ISigninDto } from './SigninDTO'
import { appConfig } from '@/config'

export class SigninUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(payload: ISigninDto) {
    try {
      const user = await this.usersRepository.findByUsername(payload.username)

      if (!user) {
        throw new CustomError('user not exists', 400)
      }

      const matchPassword = await user.isValidPassword(payload.password)

      if (!matchPassword) {
        throw new CustomError('Password is invalid', 400)
      }

      const token = jwt.sign(
        { sub: user._id, username: user.username },
        appConfig.secrets.jwt,
        {
          expiresIn: appConfig.secrets.jwtExp
        }
      )

      return {
        user,
        token
      }
    } catch (error) {
      throw new CustomError(error.message)
    }
  }
}
