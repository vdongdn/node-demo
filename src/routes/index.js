const newsRouter = require('./news')
const siteRouter = require('./site')
const placeRouter = require('./place')

function route(app) {
    app.use('/news', newsRouter)
    app.use('/place', placeRouter)
    app.use('/', siteRouter)
}

module.exports = route;