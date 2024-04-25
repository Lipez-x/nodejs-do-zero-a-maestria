const { DataTypes } = require('sequelize')
const db = require('../db/connection')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING
    }, 
        letter: {
        type: DataTypes.BOOLEAN,
   }
})

module.exports = User