const express = require('express')
const path = require('path')
const app = express()
const massive = require('massive')

const {CONNECTION_STRING} = process.env
const PORT = process.env.PORT || 3000

massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
})



app.use(
  '/styles.css',
  express.static(path.join(__dirname, '.././public/index.css')),
)



app.get('/')

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
