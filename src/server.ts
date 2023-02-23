import { mongodbFactory } from './infra/mongodb/mongodbFactory'
import { app } from './app'

async function main() {
  await mongodbFactory
  app.listen(3333, () => console.log('Sever is running at port 3333'))
}

main()
