const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
	host: 'localhost',
	user: 'leomelo',
	password: 'root',
	database: 'codecast'
})

const categories = new Promise( (resolve, reject) => {
	connection.query('SELECT * FROM categories', (error, results) => {
		if(error) {
			reject(error)
		}
		else {
			resolve({categories: results})
		}
	})    
})



module.exports = categories