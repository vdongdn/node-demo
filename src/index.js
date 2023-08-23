const express = require('express')
const morgan = require('morgan')
const path = require('path')
const engine = require('express-handlebars')
const app = express()
const port = 3000

//static resources
app.use(express.static(path.join(__dirname, 'public')))
//log
app.use(morgan('tiny'))

//tempalte engine
app.engine('hbs', engine( {
  extname : ".hbs"
}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/search', (req, res) => {
  res.render('search', {obj: req.query})
  console.log(req.query);
})

app.post('/search-post', (req, res) => {
  res.render('search', {obj: req.query})
  console.log(req.query);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})