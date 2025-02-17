const express = require('express')
const { Client } = require('pg')

const app = express()
const port = parseInt(process.env.PORT || '3001', 10) 

//DB: fluxsend_db
const client = new Client({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: 5432,
    database: process.env.CONNECTION_URL,
})

client.connect()
// const testConnection = async () => {
//   await client.connect()
//   const result = await client.query('SELECT NOW()')
//   await client.end()
// }

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {


  console.log(`Flux listening on port ${port}`)
})
