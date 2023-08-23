const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

//log
app.use(morgan('combined'))

//tempalte engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/start', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})