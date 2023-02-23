import dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const env = process.env

export const appConfig = {
  databaseURL: env.MONGODB_URL,
  port: env.APP_PORT,
  secrets: {
    jwt: env.JWT_SECRET ?? 'appsecret',
    jwtExp: '1d'
  }
}
