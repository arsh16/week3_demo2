const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.send('Home')
})

app.get('/contact', (req, res) => {
  res.send('Contact')
})

app.get('/services', (req, res) => {
  res.send('Services')
})

app.get('/projects', (req, res) => {
  res.send('Projects')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})