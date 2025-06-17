import fastify from 'fastify'
import { database } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const tables = await database('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
