const express = require('express')
const app = express()

app.use('/img', express.static(__dirname + '/img'));

// Router definitions
const raspberryRoutes = require('./routes/raspberryRoutes')

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

const db = require("./db")
app.get('/db', async function (req, res) {
  const a = await db.get(`SELECT 1`)
  return res.json(a)
})

app.use('/raspberry', raspberryRoutes)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})