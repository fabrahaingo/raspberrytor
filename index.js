const express = require('express')
const app = express()
const PORT = 3000
const db = require("./db")

app.set('view engine', 'ejs');

app.use('/img', express.static(__dirname + '/img'));

app.get('/', async function (req, res) {
  const raspberries = await db.all(`SELECT * FROM raspberry`)
  res.render("index", { raspberries })
})

app.get('/db', async function (req, res) {
  const a = await db.get(`SELECT $1`, [1])
  return res.json(a)
})

app.post('/raspberry/delete', async function (req, res) {
  const raspberry_id = req.body.id
  await db.run(`DELETE FROM raspberry WHERE id = $1`, [raspberry_id])
  return res.status(200)
})

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`)
})
