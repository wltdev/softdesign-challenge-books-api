import { NextFunction, Request, Response } from 'express'
import { RemoveBookUseCase } from './RemoveBookUseCase'

export class RemoveBookController {
  constructor(private removeBookUseCase: RemoveBookUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params
    try {
      const docs = await this.removeBookUseCase.execute(id)
      response.status(200).send(docs)
    } catch (error) {
      next(error)
    }
  }
}
