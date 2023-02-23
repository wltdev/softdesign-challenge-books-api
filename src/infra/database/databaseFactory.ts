import mongoose from 'mongoose'

const MONGODB_URL =
  'mongodb+srv://usermongodbtest:gtYfGsRHrZYS1ds4@cluster0.nlt84jp.mongodb.net/softdesign_tes'

async function factory() {
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
  ;(async () => {
    try {
      await mongoose.connect(MONGODB_URL)
      console.log('DB is connected')
    } catch (error) {
      console.error(`Database connection error: ${error.message}`)
    }
  })()
}

export const databaseFactory = factory()
