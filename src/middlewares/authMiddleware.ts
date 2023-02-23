import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { appConfig } from '@/config'
import { UserModel } from '@/infra/database/mongodb/models/UserModel'

type TOKEN = {
  username?: string
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Invalid token', status: 401 })
  }

  const token = bearer.split('Bearer ')[1].trim()

  try {
    const { username }: TOKEN = await verifyToken(token)

    const user = await UserModel.findOne({ username })

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized', status: 401 })
    }

    req.user = user
  } catch (e) {
    console.log(e)
    return res.status(401).json({ message: 'Unauthorized', status: 401 })
  }

  next()
}

export const verifyToken = (token: string) =>
  new Promise((resolve, reject) => {
    console.log(appConfig.secrets.jwt)
    jwt.verify(token, appConfig.secrets.jwt, (err: any, payload: unknown) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })
