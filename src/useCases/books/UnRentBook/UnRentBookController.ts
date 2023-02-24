import { NextFunction, Request, Response } from 'express'
import { UnRentBookUseCase } from './UnRentBookUseCase'

export class UnRentBookController {
  constructor(private unRentBookUseCase: UnRentBookUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params
    try {
      const doc = await this.unRentBookUseCase.execute(id)
      response.status(200).send(doc)
    } catch (error) {
      next(error)
    }
  }
}
