const restify = require('restify')

const server = restify.createServer()

server.use(restify.plugins.bodyParser({mapParams: true}))

const routes = require('../http/routes')

const cors = require('./cors')

cors(server)

routes(server)

module.exports = server