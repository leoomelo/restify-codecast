const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQLUSER_,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
})

const errorHandler = (error, msg, rejectFunction) => {
    console.log(error)
	rejectFunction( { error: msg })
}
const categoryModule = require('./categories')({ connection, errorHandler })

module.exports = {
	categories: () => categoryModule
}