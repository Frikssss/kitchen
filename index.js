const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Tera Campus! ça va ?')
})

app.get('/answer', (req, res) => {
  res.send('ça va tlès bien')
})

app.get('/bad-answer', (req, res) => {
  res.send('Non ça va po')
})

app.get('/route3', (req, res) => {
  res.send('C\'est la 3ème route')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
