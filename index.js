const express = require('express')
const app = express()
const opn = require('opn')

// Router definitions
const raspberryRoutes = require('./routes/raspberryRoutes')

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.use('/raspberry', raspberryRoutes)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
  opn('http://localhost:3000')
})