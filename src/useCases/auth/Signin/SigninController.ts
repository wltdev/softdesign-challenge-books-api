import { NextFunction, Request, Response } from 'express'
import { SigninUseCase } from './SigninUseCase'

export class SigninController {
  constructor(private SigninUseCase: SigninUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const doc = await this.SigninUseCase.execute(request.body)
      response.status(200).send(doc)
    } catch (error) {
      next(error)
    }
  }
}
