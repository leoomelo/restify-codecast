const restify = require('restify')
const jwtMiddleware = require('../server/jwtMiddleware')

const server = restify.createServer()

server.use(restify.plugins.bodyParser({mapParams: true}))

const routes = require('../http/routes')

const cors = require('./cors')

const exclusions = ['/authenticate']

cors(server)

routes(server)

server.use(jwtMiddleware({ exclusions })) 

module.exports = server