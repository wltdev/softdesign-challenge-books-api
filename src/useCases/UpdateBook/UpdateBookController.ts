import { NextFunction, Request, Response } from 'express'
import { UpdateBookUseCase } from './UpdateBookUseCase'

export class UpdateBookController {
  constructor(private updateBookUseCase: UpdateBookUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params
    try {
      const docs = await this.updateBookUseCase.execute(id, request.body)
      response.status(200).send(docs)
    } catch (error) {
      next(error)
    }
  }
}
