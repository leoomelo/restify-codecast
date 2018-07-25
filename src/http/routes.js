const db = require('../services/mysql')

const routes = (server) =>  {

	server.get('/categorias', async (req, res, next) => {
		try {
			res.send(await db.categories().all())
		}
		catch( error ) {
			res.send(error)
		}
		next()
	})
    
	server.post('/categorias', async (req, res, next) => {
		try{
			const { name } = req.params
			res.send(await db.categories().save(name))
		}
		catch( error ) {
			res.send(error)
		}
		next()		
	})

	server.put('/categorias', async (req, res, next) => {
		try{
			const { id, name } = req.params
			res.send(await db.categories().update(id, name))
		}
		catch( error ) {
			res.send(error)
		}
		next()		
	})

	server.del('/categorias', async (req, res, next) => {
		try{
			const { id } = req.params
			res.send(await db.categories().del(id))
		}
		catch( error ) {
			res.send(error)
		}
		next()		
	})
	
	
	//====================================
	server.get('/users', async (req, res, next) => {
		try {
			res.send(await db.users().all())
		}
		catch( error ) {
			res.send(error)
		}
		next()
	})

	server.post('/users', async (req, res, next) => {
		try{
			const { email, password } = req.params
			res.send(await db.users().save(email, password))
		}
		catch( error ) {
			res.send(error)
		}
		next()		
	})

	server.put('/users', async (req, res, next) => {
		try{
			const { id, password } = req.params
			res.send(await db.users().update(id, password))
		}
		catch( error ) {
			res.send(error)
		}
		next()		
	})

	server.del('/users', async (req, res, next) => {
		try{
			const { id } = req.params
			res.send(await db.users().del(id))
		}
		catch( error ) {
			res.send(error)
		}
		next()		
	})
	
	//====================================
	server.post('/authenticate', async (req, res, next) => {
		try{
			const { email, password} = req.params
			res.send(await db.auth().authenticate())
		}
		catch( error) {
			res.send(error)
		}
	})

}

module.exports = routes