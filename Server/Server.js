require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const massive = require('massive')
const quotes_controller = require('./controllers/quotes_controller')
const { parse } = require('pg-connection-string')
const cors = require('cors')

const CONNECTION_STRING = parse(process.env.CONNECTION_STRING)
const PORT = 5432
console.log(CONNECTION_STRING)
CONNECTION_STRING.ssl = {
  rejectUnauthorized: false,
}

app.use(express.json())

app.use(
  cors(),
  // // function (req, res) {
  // //   res.header('Access-Control-Allow-Origin', 'http://localhost:5432/')
  // //   res.header(
  // //     'Access-Control-Allow-Headers',
  // //     'Origin, X-Requested-With, Content-Type, Accept',
  // //   )
  // },
  express.static(path.join(__dirname, '.././public/index.css')),
)

//look into the security vulnerabilities and the lines

massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
  console.log('db connected')
})

app.get('/api/quotes', quotes_controller.randomQuote)
app.post('/api/quotes', quotes_controller.addQuote)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
