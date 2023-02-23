import { NextFunction, Request, Response } from 'express'
import { StoreBookUseCase } from './StoreBookUseCase'

export class StoreBookController {
  constructor(private storeBookUseCase: StoreBookUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const docs = await this.storeBookUseCase.execute(request.body)
      response.status(200).send(docs)
    } catch (error) {
      next(error)
    }
  }
}
