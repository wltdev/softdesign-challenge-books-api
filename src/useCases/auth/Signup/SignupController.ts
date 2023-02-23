import { NextFunction, Request, Response } from 'express'
import { SignupUseCase } from './SignupUseCase'

export class SignupController {
  constructor(private signupUseCase: SignupUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const doc = await this.signupUseCase.execute(request.body)
      response.status(200).send(doc)
    } catch (error) {
      next(error)
    }
  }
}
