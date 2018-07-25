const sha1 = require('sha1')

const users = deps => {
	return {
		all : () => {
			return new Promise( (resolve, reject) => {
				const { connection, errorHandler } = deps
				connection.query('SELECT * FROM users', (error, results) => {
					if(error) {
						errorHandler(error, 'Falha ao listar os usuários', reject)
						return false
					}
					
					resolve({users: results})
					
				})    
			})
		},
        
		save: (email, password) => {
			return new Promise( (resolve, reject ) => {
				const { connection, errorHandler } = deps
				connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, sha1(password)], (error, results) => {
					if(error) {
						errorHandler(error, `Falha ao inserir o usuário ${email}`, reject)
						return false
					}

					resolve({ users: { email, id: results.insertId }})
				})
			})
		},

		update: (id, password) => {
			return new Promise( ( resolve, reject ) => {
				const { connection, errorHandler } = deps
				connection.query('UPDATE users SET password=(?) WHERE id=(?)', [sha1(password), id], (error, results) => {
					if(error || !results.affectedRows) {
						errorHandler(error, `Falha ao atualizar a senha do usuário de id ${id}`, reject)
						return false
					}
					resolve( {user: id, affectedRows: results.affectedRows})
				})
			})
		},

		del: (id) => {
			return new Promise( (resolve, reject ) => {
				const { connection, errorHandler } = deps
				connection.query('DELETE FROM users WHERE ID=(?)', [id], (error, results) => {
					if(error || !results.affectedRows) {
						errorHandler(error, `Falha ao remover o usuário de id ${id}`, reject)
						return false
					}
					resolve( {message: 'Usuário removido com sucesso', affectedRows: results.affectedRows})
				})
			})
		}
	}
	
}

module.exports = users