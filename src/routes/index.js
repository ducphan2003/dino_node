const siteRouter = require('./site');
const flowersRouter = require('./flowers');

function route(app) {
    app.use('/flowers', flowersRouter)

    app.use('/', siteRouter)
}

module.exports = route;
