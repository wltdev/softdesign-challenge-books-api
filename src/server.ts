import { databaseFactory } from './infra/database/databaseFactory'
import { app } from './app'
import { appConfig } from './config'

async function main() {
  await databaseFactory
  app.listen(appConfig.port, () =>
    console.log(`Sever is running at port ${appConfig.port}`)
  )
}

main()
