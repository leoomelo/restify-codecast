const cors = (server) => {

	const corsMiddleware = require('restify-cors-middleware')

	const cors = corsMiddleware({
		preflightMaxAge: 5, //Optional
		origins: ['*'],
		allowHeaders: ['*'],
		exposeHeaders: ['*']
	})

	server.pre(cors.preflight)
	server.use(cors.actual)

}

module.exports = cors