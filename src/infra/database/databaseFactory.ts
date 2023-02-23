import { appConfig } from '@/config'
import mongoose from 'mongoose'

async function factory() {
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
  ;(async () => {
    try {
      await mongoose.connect(appConfig.databaseURL)
      console.log('DB is connected')
    } catch (error) {
      console.error(`Database connection error: ${error.message}`)
    }
  })()
}

export const databaseFactory = factory()
