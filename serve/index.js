const express = require('express')
const app = express()
const port = 3000
const path = require('path')
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.static(path.join(__dirname + '/dist')))
app.use(express.static('./dist'))
app.post('/hellow', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
