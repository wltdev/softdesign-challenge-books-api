import { NextFunction, Request, Response } from 'express'
import { RentBookUseCase } from './RentBookUseCase'

export class RentBookController {
  constructor(private rentBookUseCase: RentBookUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params
    const user = request.user

    try {
      const doc = await this.rentBookUseCase.execute(id, user._id)
      response.status(200).send(doc)
    } catch (error) {
      next(error)
    }
  }
}
