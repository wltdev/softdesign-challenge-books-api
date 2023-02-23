import { databaseFactory } from './infra/database/databaseFactory'
import { app } from './app'

async function main() {
  await databaseFactory
  app.listen(3333, () => console.log('Sever is running at port 3333'))
}

main()
