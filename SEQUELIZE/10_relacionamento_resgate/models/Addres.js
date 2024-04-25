const { DataTypes } = require('sequelize')
const db = require('../db/connection')
const User = require('../models/user')

const Addres = db.define('Addres', {
    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }
})

User.hasMany(Addres)
Addres.belongsTo(User)

module.exports = Addres;