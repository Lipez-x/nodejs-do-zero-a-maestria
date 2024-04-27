const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log("Conectado ao MySQL!")
} catch (error) {
    console.error(error)
}

module.exports = sequelize