const express = require('express')
const morgan = require('morgan')
const path = require('path')
const engine = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db')
const SortMiddleWare = require('./app/middlewares/SortMiddleware')
const app = express()
const port = 3000

//Connect to db
db.connect();

//static resources
app.use(express.static(path.join(__dirname, 'public')))
//log
app.use(morgan('tiny'))
//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(SortMiddleWare)

route(app)

//tempalte engine
app.engine('hbs', engine({
  extname: ".hbs",
  helpers: {
    sum: (a, b) => a + b,
    sortable: (field, type) => {
      const sortIcons = {
        'asc': 'fa-sort-asc',
        'desc': 'fa-sort-desc',
        'default': 'fa-sort'
      }
      let icon =  sortIcons[type];
      let _type = type == 'asc' ? 'desc' : 'asc';

      return `<a href="?_sort&column=${field}&type=${_type}">
                <i class="fa ${icon}" aria-hidden="true"></i>
              </a>`;
    }
  }
}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})