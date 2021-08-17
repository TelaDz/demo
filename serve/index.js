const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const history = require('connect-history-api-fallback')
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
var options = {
  maxAge: 3600000
}
app.use('/', history())
// app.use(express.static(path.join(__dirname + '/dist')),options)
app.use(express.static('../dist'))
app.post('/hellow', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
