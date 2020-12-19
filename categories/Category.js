const Sequelize = require('sequelize')
const connection = require('../database/database')

const Category = connection.define('categorie', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Category.sync({force: true}) //RECRIA A TABELA

module.exports = Category;