const express = require('express')
const app = express()
const PORT = 3000
const db = require("./db")

app.use('/img', express.static(__dirname + '/img'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/raspberry/list', async function (req, res) {
  const raspberries = await db.all(`SELECT * FROM raspberry`)
  return res.json(raspberries)
})

app.post('/raspberry/delete', async function (req, res) {
  const raspberry_id = req.body.id
  await db.run(
    `DELETE FROM raspberry WHERE id = $1`,
    [raspberry_id]
  )
  return res.status(200)
})

app.get('/raspberry/add', async function (req, res) {
  const raspberry_ip = req.body.ip
  const raspberry_name = req.body.name
  await db.run(
    `INSERT INTO raspeberries (name, ip) VALUES ($1, $2)`,
    [raspberry_ip, raspberry_name]
  )
  return res.status(200)
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`)
})
