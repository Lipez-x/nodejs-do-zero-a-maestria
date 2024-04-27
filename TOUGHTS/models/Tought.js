const { DataTypes } = require('sequelize')
const db = require('../db/connection')
const User = require('./User')

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
})

Tought.belongsTo(User)
User.hasMany(Tought)

module.exports = Tought