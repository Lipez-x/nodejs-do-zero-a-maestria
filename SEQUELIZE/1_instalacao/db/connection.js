const { Sequelize } = require('sequelize')

const sequelize = new Sequelize ('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log("Conectado ao banco de dados.")
} catch (error) {
    console.error('Error:', error)
}

module.exports = sequelize