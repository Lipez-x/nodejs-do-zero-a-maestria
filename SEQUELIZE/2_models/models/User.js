const { DataTypes } = require('sequelize')
const db = require('../db/connection')

const User = db.define('User', {
   name: {
       type: DataTypes.STRING,
       allowNull: false
   },
   ocupation:{
       type: DataTypes.STRING,
       required: true
   },
   newslatter: {
       type: DataTypes.BOOLEAN,
   }
})

module.exports = User