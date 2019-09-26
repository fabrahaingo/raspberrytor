const express = require('express')
const app = express()
const db = require("./db")

const PORT = 3000

app.use('/img', express.static(__dirname + '/img'));

// Router definitions
const raspberryRoutes = require('./routes/raspberryRoutes')

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.get("/raspberry/list", async function (req, res) {
  const raspberries = await db.all(`SELECT * FROM rasbperry WHERE id = id`)
  return res.json(raspberries)
})

app.use('/raspberry', raspberryRoutes)

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`)
})