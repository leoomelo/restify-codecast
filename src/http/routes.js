const categories = require('../services/mysql/index')

const routes = (server) =>  {

	server.get('/categoria', (req, res, next) => {
		categories.then(
			categories => res.send(categories))
			.catch(error => console.log(error))
		
		next()
	})
    
	server.post('/categoria', (req, res, next) => {
		const { name, id } = req.params
		res.send(name)
		next()
	})
    
	// server.put('/categoria', (req, res, next) => {
	// 	res.send('Enjoy the silence?')
	// 	next()
	// })
    
	// server.delete('/categoria', (req, res, next) => {
	// 	res.send('Enjoy the silence?')
	// 	next()
    // })
    
    server.get('/', (req, res, next) => {
		res.send('Enjoy the silence?')
		next()
	})

}

module.exports = routes