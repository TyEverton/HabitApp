const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, './habit-app/Components/Home')))

app.use('/styles.css', express.static(path.join(__dirname, '/src/index.css')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
