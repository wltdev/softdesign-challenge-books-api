import { NextFunction, Request, Response } from 'express'
import { GetBooksUseCase } from './GetBooksUseCase'

export class GetBooksController {
  constructor(private getBooksUseCase: GetBooksUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    const { search } = request.query

    try {
      const docs = await this.getBooksUseCase.execute({ search: String(search) })
      response.status(200).send(docs)
    } catch (error) {
      next(error)
    }
  }
}
