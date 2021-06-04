const express = require('express')
const app = express()
const port = 3000

// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})