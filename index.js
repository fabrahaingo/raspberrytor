const express = require('express')
const app = express()

const PORT = 3000

app.use('/img', express.static(__dirname + '/img'));

// Router definitions
const raspberryRoutes = require('./routes/raspberryRoutes')

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

const db = require("./db")
app.get('/db', async function (req, res) {
  const a = await db.get(`SELECT $1`, [1])
  return res.json(a)
})

app.use('/raspberry', raspberryRoutes)

app.listen(PORT, function () {
  console.log(`listrning on port ${PORT}`)
})