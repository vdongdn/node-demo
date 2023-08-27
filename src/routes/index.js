const newsRouter = require('./news')
const siteRouter = require('./site')
const placeRouter = require('./place')
const meRouter = require('./me')

function route(app) {
    app.use('/news', newsRouter)
    app.use('/place', placeRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)
}

module.exports = route;