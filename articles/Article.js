const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require('../categories/Category')

const Article = connection.define('article', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})
Category.hasMany(Article); //UMA categoria TEM MUITOS artigos
Article.belongsTo(Category); //UM artigo pertence a UMA categoria

// Article.sync({force: true}) //RECRIA A TABELA


module.exports = Article;