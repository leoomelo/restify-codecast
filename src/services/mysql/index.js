const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
	host: 'localhost',
	user: 'leomelo',
	password: 'root',
	database: 'codecast'
})

const errorHandler = (error, msg, rejectFunction) => {
    console.log(error)
	rejectFunction( { error: msg })
}
const categoryModule = require('./categories')({ connection, errorHandler })

module.exports = {
	categories: () => categoryModule
}