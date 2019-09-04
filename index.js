const express = require('express')
const app = express()
const opn = require('opn')
const multer = require('multer')
var Storage = multer.diskStorage({
  destination: function(req, file, callback) {
      callback(null, './img')
  },
  filename: function(req, file, callback) {
      callback(null, file.fieldname + '.jpg')
  }
})
const upload = multer({
  storage: Storage
})

app.use('/img', express.static(__dirname + '/img'));

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

app.post('/upload1', upload.single('raspberry1'), (req, res) => {
  if (!req.file)
    console.log("No file received")
  else
    console.log('file received')
    res.redirect(req.get('referer'));
})

app.post('/upload2', upload.single('raspberry2'), (req, res) => {
  if (!req.file)
    console.log("No file received")
  else
    console.log('file received')
    res.redirect(req.get('referer'));
})

app.post('/upload3', upload.single('raspberry3'), (req, res) => {
  if (!req.file)
    console.log("No file received")
  else
    console.log('file received')
    res.redirect(req.get('referer'));
})

app.post('/upload4', upload.single('raspberry4'), (req, res) => {
  if (!req.file)
    console.log("No file received")
  else
    console.log('file received')
    res.redirect(req.get('referer'));
})

app.post('/upload5', upload.single('raspberry5'), (req, res) => {
  if (!req.file)
    console.log("No file received")
  else
    console.log('file received')
    res.redirect(req.get('referer'));
})

app.post('/upload6', upload.single('raspberry6'), (req, res) => {
  if (!req.file)
    console.log("No file received")
  else
    console.log('file received')
    res.redirect(req.get('referer'));
})

app.post('/upload7', upload.single('raspberry7'), (req, res) => {
  if (!req.file)
    console.log("No file received")
  else
    console.log('file received')
    res.redirect(req.get('referer'));
})

app.post('/upload8', upload.single('raspberry8'), (req, res) => {
  if (!req.file)
    console.log("No file received")
  else
    console.log('file received')
    res.redirect(req.get('referer'));
})