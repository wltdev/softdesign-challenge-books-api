import { Request, Response, NextFunction } from 'express'

export class CustomError {
  message!: string
  status!: number
  additionalInfo!: any

  constructor(message: string, status = 500, additionalInfo: any = {}) {
    this.message = message
    this.status = status
    this.additionalInfo = additionalInfo
  }
}

/**
 * Custom error handler to standardize error objects returned to
 * the client
 *
 * @param err Error caught by Express.js
 * @param req Request object provided by Express
 * @param res Response object provided by Express
 * @param next NextFunction function provided by Express
 */
export function errorMiddleware(
  err: TypeError | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let customError = err

  if (!(err instanceof CustomError)) {
    customError = new CustomError(
      'Oh no, this is embarrasing. We are having troubles my friend'
    )
  }
  res.status((customError as CustomError).status).send(customError)
}
