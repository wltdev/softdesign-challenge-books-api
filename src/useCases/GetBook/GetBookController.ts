import { NextFunction, Request, Response } from 'express'
import { GetBookUseCase } from './GetBookUseCase'

export class GetBookController {
  constructor(private getBookUseCase: GetBookUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params

    try {
      const doc = await this.getBookUseCase.execute({ id })
      response.status(200).send(doc)
    } catch (error) {
      next(error)
    }
  }
}
