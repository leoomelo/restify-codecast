const db = require('../services/mysql')

// db.categories().update(id, name)
// db.categories().del(id)

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
    
	server.get('/', (req, res, next) => {
		res.send('Enjoy the silence?')
		next()
	})

}

module.exports = routes