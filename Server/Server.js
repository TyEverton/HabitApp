require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const massive = require('massive')
const quotes_controller = require('./controllers/quotes_controller')
const { parse } = require('pg-connection-string')

const CONNECTION_STRING = parse(process.env.CONNECTION_STRING)
const PORT = 5432
console.log(CONNECTION_STRING)
CONNECTION_STRING.ssl = {
  rejectUnauthorized: false,
}

app.use(
  '/styles.css',
  express.static(path.join(__dirname, '.././public/index.css')),
)

massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
  console.log('db connected')
})

app.get('/api/quotes', quotes_controller.randomQuote)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
