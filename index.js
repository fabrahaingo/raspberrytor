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

app.get('/db', async function (req, res) {
  const a = await db.get(`SELECT $1`, [1])
  return res.json(a)
})

app.post('/raspberry/delete', function (req, res) {
  const raspberry_id = req.body.id
  await db.run(
    `DELETE FROM raspberry WHERE id = $1`,
    [raspberry_id]
  )
  return res.status(200)
})

app.use('/raspberry', raspberryRoutes)

app.listen(PORT, function () {
  console.log(`listning on port ${PORT}`)
})
