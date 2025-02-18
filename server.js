const express = require('express')
const { Client } = require('pg')

const app = express()
const port = parseInt(process.env.PORT || '3001', 10) 

//DB: fluxsend_db
const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0
});

console.log(client)
const createDB = async () => {
  try {
      await client.connect();
      console.log("created db")
  }
  catch (err) {
      console.log(err)
      console.log("Already created")
  }
  finally {
      await client.end();
  }
}

// const testConnection = async () => {
//   await client.connect()
//   const result = await client.query('SELECT NOW()')
//   await client.end()
// }

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, async () => {
  await createDB()
  console.log(`Flux listening on port ${port}`)
})
